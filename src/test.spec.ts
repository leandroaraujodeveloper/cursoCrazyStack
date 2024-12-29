import sayHelloWorld from "@/server";
import trafficSource from "@/analytics";

describe("First test of my life", () => {
    test("Should call sayHelloWorld and return the message", () => {
        const message = sayHelloWorld("Hello World");
        expect(message).toBe("Hello World");

    }

    )
});


describe("Test analytics traffic source", () => {
    test("Should call trafficSource and return the message", () => {
        const tsource = trafficSource("BOB_GUERREIRO");
        expect(tsource).toBe("BOB_GUERREIRO")
    })
});