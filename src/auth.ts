import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
});
// https://www.youtube.com/watch?v=OmX8fryikjg&ab_channel=codewithlari
// 32:42
// https://supabase.com/dashboard/project/rgogzsercwrmvpgmpawa/settings/database