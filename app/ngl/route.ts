import {cookies} from "next/headers";
import type {NextRequest} from "next/server";

function getDeviceId() {
    const store = cookies();
    const stored = store.get("deviceId");

    if (stored) {
        return stored.value;
    }

    const uuid = crypto.randomUUID();

    store.set({
        name: "deviceId",
        sameSite: "strict",
        value: uuid,
    });

    return uuid;
}

export async function POST(request: NextRequest) {
    return fetch("https://ngl.link/api/submit", {
        method: "POST",
        body: new URLSearchParams({
            gameSlug: "",
            deviceId: getDeviceId(),
            question: await request.text(),
            username: process.env.NGL_USERNAME!,
            referrer: `https://${process.env.VERCEL_URL}`,
        })
    });
}