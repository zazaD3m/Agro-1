import { Router } from "express";
import passport from "passport";
// import { googleVerifyUser } from "../controllers/authController.js";
import { Strategy as FacebookStrategy } from "passport-facebook";
import {
  API_URL,
  CLIENT_URL,
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  FACEBOOK_CALLBACK_URL,
} from "../config/config.js";
import User from "../models/userModel.js";
import { generateFacebookToken } from "../services/jwt.js";
import { checkFacebookAuth } from "../middleware/authMiddleware.js";
import { facebookVerifyUser } from "../controllers/authController.js";

const router = Router();

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: `${API_URL}${FACEBOOK_CALLBACK_URL}`,
      profileFields: ["id", "displayName", "email"],
      session: false,
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        console.log(profile);
        const { id, displayName, email } = profile;
        // Find or create a user based on the Google profile
        let user = await User.findOne({ email });

        if (user) {
          if (!user.facebookId) {
            user.facebookId = facebookId;
          }
          if (!user.loginStrategy.includes("facebook")) {
            if (user.loginStrategy.length > 0) {
              const strategy = user.loginStrategy;
              user.loginStrategy = [...strategy, "facebook"];
            } else {
              user.loginStrategy = ["facebook"];
            }
          }
          await user.save();
          return done(null, { userId: user._id });
        }

        user = new User({
          facebookId: id,
          firstName: displayName,
          loginStrategy: ["facebook"],
          email: email,
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
  passport.authenticate("facebook", {
    session: false,
  })
);

router.get(
  "/callback",
  passport.authenticate("facebook", {
    failureRedirect: `${CLIENT_URL}/auth/login`,
    session: false,
  }),
  (req, res) => {
    const { userId } = req.user;

    // Generate a google token, send to client to then receive it back for verification
    const token = generateFacebookToken(userId);

    // Send the JWT token back to the main window
    // where there is listener set up waiting for a message
    res.send(`
    <html>
      <body>
        <script>
          window.opener.postMessage({ token: '${token}' }, '${CLIENT_URL}');
          window.close();
        </script>
      </body>
    </html>
  `);
  }
);

router.post(
  "/verify",
  // [checkGoogleAuthValidator, validate],
  checkFacebookAuth,
  facebookVerifyUser
);

export default router;
