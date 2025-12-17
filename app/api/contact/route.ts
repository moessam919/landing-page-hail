import { google } from "googleapis";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const auth = new google.auth.JWT({
            email: process.env.GOOGLE_CLIENT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID!,
            range: "Hail Landing Leads!A:D",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [
                        body.name,
                        body.phone,
                        body.email,
                        new Date().toLocaleString("en-US"),
                    ],
                ],
            },
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error(error);
        return Response.json(
            { success: false, error: "Google Sheets error" },
            { status: 500 }
        );
    }
}
