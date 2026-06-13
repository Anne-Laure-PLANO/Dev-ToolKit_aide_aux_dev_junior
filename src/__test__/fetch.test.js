import { htmlToText, getOrigin, formatDate } from "../services/fetchNews.js";
import { test, expect } from "vitest";


test("htmlToText removes HTML tags", () => {
    expect(htmlToText("<p>Bonjour</p>")).toBe("Bonjour");
});

test("htmlToText removes multiple HTML tags",() => {
    expect(htmlToText("<p><span>Hello</span></p>")).toBe("Hello");
});


test("getOrigin returns only the domain", () => {
    expect(getOrigin("https://www.developpez.com/article/123")).toBe("https://www.developpez.com");
});

test("getOrigin returns only the domain without parameters", () => {
    expect(getOrigin("https://www.developpez.com/article/123?name=test&function=try")).toBe("https://www.developpez.com");
});

test("formatDate formats date correctly", () => {
    expect(formatDate("2024-01-15")).toBe("15 janvier 2024");
});