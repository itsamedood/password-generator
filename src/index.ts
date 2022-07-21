import { question } from "readline-sync";

class Generator {

	/**
	 * Internal set of characters used when generating the password.
	 */
	private static chars: string[] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_=+{[}];:'\"|\\<>,./?".split("");

	/**
	 * Asks the user for a number, which is used as the length of the password.
	 * @returns number
	 */
	private static getLen(): number { return Number(question("Length? ")); };

	/**
	 * Generates a random password.
	 * @returns string
	 */
	public static generate(): string {
		const length = this.getLen();
		let password = "";

		// Iterate in range 0 -> length, adding a random character from `this.chars` to `password`.
		for (let i = 0; i < length; i++)
			password += this.chars[~~(Math.random() * this.chars.length)]; // ~~(...) = Math.floor(...)

		return password;
	};
};

console.log(Generator.generate());
