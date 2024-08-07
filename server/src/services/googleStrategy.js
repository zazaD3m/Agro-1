import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/userModel.js";
import { API_URL } from "../utils/constants.js";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../config/config.js";

const googleStrategy = () =>
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: `${API_URL}/api/auth/google/callback`,
      scope: ["email", "profile"],
    },
    async (accessToken, refreshToken, profile, done) => {
      const email = profile.emails[0].value;
      let user;
      try {
        user = await User.findOne({ email });
        if (!user) {
          user = await User.create({
            name: profile.name.givenName,
            email: email,
          });
        }
        return done(null, { id: user._id });
      } catch (err) {
        console.log(err);
        return done(err, null);
      }
    }
  );

// The done function is part of the Passport.js callback and is used to indicate the completion of the authentication process. The first argument (null in this case) is reserved for an error, and the second argument (token) is what will be attached to req.user.
passport.use(googleStrategy);
