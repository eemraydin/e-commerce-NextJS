import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";
import { orders } from "@wix/ecom";
import { members } from "@wix/members";

export const wixClientServer = async () => {
  let refreshToken;
  try {
    const cookieStore = await cookies();
    refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
  } catch (e) {
    console.log(e);
  }
  const wixClientServer = createClient({
    modules: {
      products,
      collections,
      // currentCart,
      orders,
      members
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_API_ID!,
      tokens: {
        refreshToken,
        accessToken: {
          value: "",
          expiresAt: 0,
        },
      },
    }),
  });
  return wixClientServer;
};
