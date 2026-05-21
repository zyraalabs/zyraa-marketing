import { cookies, headers } from "next/headers";
import Link from "next/link";
import { getToken } from "next-auth/jwt";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { APP_URL, AUTH_URL, IS_PRODUCTION, NEXTAUTH_SECRET } from "@/lib/env";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";
import { UserMenu } from "./userMenu";

export async function Nav() {
  const cookieStore = await cookies();
  const headersList = await headers();

  const token = await getToken({
    req: {
      cookies: Object.fromEntries(
        cookieStore.getAll().map((c) => [c.name, c.value]),
      ),
      headers: Object.fromEntries(headersList.entries()),
    } as Parameters<typeof getToken>[0]["req"],
    secret: NEXTAUTH_SECRET,
    cookieName: IS_PRODUCTION
      ? "__Secure-next-auth.session-token"
      : "next-auth.session-token",
  });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-15 flex items-center justify-between px-6 md:px-13 bg-background/80 backdrop-blur-[20px] border-b border-border">
      <Logo />
      <NavLinks />
      <div className="flex gap-2.5 items-center">
        <ThemeToggle />
        {token ? (
          <UserMenu
            name={(token.name as string) ?? "User"}
            email={(token.email as string) ?? ""}
            image={token.picture as string | undefined}
          />
        ) : (
          <>
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
              asChild
            >
              <Link href={`${AUTH_URL}/login`}>Sign in</Link>
            </Button>
            <Button variant="brand" size="sm" asChild>
              <Link href={`${APP_URL}/dashboard`}>Get started</Link>
            </Button>
          </>
        )}
        <MobileMenu />
      </div>
    </nav>
  );
}
