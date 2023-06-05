import { Listing, User } from "@prisma/client";

export type SafeListing = Omit<
	Listing,
	"createdAt"
> & {
	createdAt: string;
};

export type SafeUser = Omit<
	User,
	"createdAt" | "updatedAt" | "emailVerified"
> & {
	createdAt: string;
	updatedAt: string;
	emailVerified: string | null;
};