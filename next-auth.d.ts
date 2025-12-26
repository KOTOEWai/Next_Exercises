import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * session object ရဲ့ user ထဲမှာ id ပါဝင်ကြောင်း TypeScript ကို အသိပေးခြင်း
   */
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"]
  }

  /**
   * user object (authorize ကနေ ပြန်လာတဲ့အရာ) ထဲမှာ id ပါဝင်ကြောင်း အသိပေးခြင်း
   */
  interface User {
    id: string;
  }
}

declare module "next-auth/jwt" {
  /**
   * JWT token ထဲမှာ id ပါဝင်ကြောင်း အသိပေးခြင်း
   */
  interface JWT {
    id: string;
  }
}