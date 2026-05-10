export type Role = "student" | "parent" | "teacher" | "admin";

/** Public registration only; admin is assigned in Supabase. */
export type SignupRole = "student" | "parent" | "teacher";

export function isRole(v: string | undefined): v is Role {
  return v === "student" || v === "parent" || v === "teacher" || v === "admin";
}

export function isSignupRole(v: string | undefined): v is SignupRole {
  return v === "student" || v === "parent" || v === "teacher";
}
