import { Router } from "express";
import passport from "passport";
import { googleVerifyUser } from "../controllers/authController.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import {
  API_URL,
  CLIENT_URL,
  GOOGLE_CALLBACK_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from "../config/config.js";
import User from "../models/userModel.js";
import { generateGoogleToken } from "../services/jwt.js";
import { checkGoogleAuth } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validationMiddleware.js";
import { checkGoogleAuthValidator } from "../validations/authValidation.js";

// /api/auth/google
const router = Router();

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: `${API_URL}${GOOGLE_CALLBACK_URL}`,
      session: false,
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        const { sub: googleId, given_name, family_name, email } = profile._json;
        // Find or create a user based on the Google profile
        let user = await User.findOne({ email });

        if (user) {
          if (!user.googleId) {
            user.googleId = googleId;
            if (user.loginStrategy.length > 0) {
              const strategy = user.loginStrategy;
              user.loginStrategy = [...strategy, "google"];
            } else {
              user.loginStrategy = ["google"];
            }
            await user.save();
          }
          return done(null, { userId: user._id });
        }

        user = new User({
          googleId: googleId,
          firstName: given_name,
          lastName: family_name,
          loginStrategy: ["google"],
          email,
        });
        await user.save();

        // Return the user object to Passport
        return done(null, { userId: user._id });
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

router.get(
  "/",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

router.get("/callback/failure", (req, res) => {
  res.send(`
    <html>
      <body>
        <script>
          window.close();
        </script>
      </body>
    </html>
  `);
});

router.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: `${API_URL}/api/auth/google/callback/failure`,
    session: false,
  }),
  (req, res) => {
    const { userId } = req.user;

    // Generate a google token, send to client to then receive it back for verification
    const token = generateGoogleToken(userId);

    // Send the JWT token back to the main window
    // where there is listener set up waiting for a message
    res.send(`
    <html>
      <body>
        <script>
          window.opener.postMessage({ token: '${token}', strategy: 'google' }, '${CLIENT_URL}');
          window.close();
        </script>
      </body>
    </html>
  `);
  }
);

router.post(
  "/verify",
  [checkGoogleAuthValidator, validate],
  checkGoogleAuth,
  googleVerifyUser
);

export default router;
