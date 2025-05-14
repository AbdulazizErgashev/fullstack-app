import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
});
// https://www.youtube.com/watch?v=OmX8fryikjg&ab_channel=codewithlari
// 12:10