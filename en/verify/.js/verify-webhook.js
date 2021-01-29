// Establish Variables
var regionURL;
var regionPicture;
var regionColor;

var wData = {
    'wFNR' : 'https://api.the-fnr.com/webhook-pass-through?target=fnr',
    'pFNR' : 'https://i.imgur.com/2S8woDF.png',
    'cFNR' : 3644522,
    'wKS' : 'https://api.the-fnr.com/webhook-pass-through?target=ks',
    'pKS' : 'https://i.imgur.com/5K4voKm.png',
    'cKS' : 2201331
}

function extractRegionObjects(region) {
    if (region == "FNR") {
        regionURL = wData.wFNR;
        regionPicture = wData.pFNR;
        regionColor = wData.cFNR;
    } else if (region == "KS") {
        regionURL = wData.wKS;
        regionPicture = wData.pKS;
        regionColor = wData.cKS;
    }
}

async function success(nation, checksum, discordId, region) {
    await extractRegionObjects(region);
    var webhookSuccess = fetch(regionURL,
                        {
                            method: 'post',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                // the username to be displayed
                                username: 'NS Verification',
                                // the avatar to be displayed
                                avatar_url:
                                    regionPicture,
                                // contents of the message to be sent
                                content:
                                    '✅ Result:',
                                // embeds to be sent
                                embeds: [
                                    {
                                        // decimal number colour of the side of the embed
                                        color: regionColor,
                                        // author
                                        // - icon next to text at top (text is a link)
                                        author: {
                                            name: 'Official Verification Result',
                                            url: 'https://ns.heaveria.com/en/verify/form.html',
                                        },
                                        // embed description
                                        // - text on 3rd row
                                        description: 'Information:',
                                        // custom embed fields: bold title/name, normal content/value below title
                                        // - located below description, above image.
                                        fields: [
                                            {
                                                name: '**Nation Name:**',
                                                value: nation + "\n",
                                            },
                                            {
                                                name: '**Checksum:**',
                                                value: checksum + "\n",
                                            },
                                            {
                                                name: '**Discord ID:**',
                                                value: discordId + "\n",
                                            },
                                        ],
                                        // footer
                                        // - icon next to text at bottom
                                        footer: {
                                            text: 'Developed by Heaveria',
                                            icon_url:
                                                'https://i.imgur.com/vHho1F5.png',
                                        },
                                    },
                                ],
                            }),
                        }
                    );
;}

async function fail(nation, checksum, discordId, region) {
    await extractRegionObjects(region);
    var webhookFail = fetch(regionURL,
                    {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            // the username to be displayed
                            username: 'NS Verification',
                            // the avatar to be displayed
                            avatar_url:
                                regionPicture,
                            // contents of the message to be sent
                            content:
                                '❌ Result:',
                            // embeds to be sent
                            embeds: [
                                {
                                    // decimal number colour of the side of the embed
                                    color: 16711680,
                                    // author
                                    // - icon next to text at top (text is a link)
                                    author: {
                                        name: 'Official Verification Result',
                                        url: 'https://ns.heaveria.com/en/verify/form.html',
                                    },
                                    // embed description
                                    // - text on 3rd row
                                    description: 'Information:',
                                    // custom embed fields: bold title/name, normal content/value below title
                                    // - located below description, above image.
                                    fields: [
                                        {
                                            name: '**Nation Name:**',
                                            value: nation + "\n",
                                        },
                                        {
                                            name: '**Checksum:**',
                                            value: checksum + "\n",
                                        },
                                        {
                                            name: '**Discord ID:**',
                                            value: discordId + "\n",
                                        },
                                        {
                                            name: '**Region:**',
                                            value: region
                                        }
                                    ],
                                    // footer
                                    // - icon next to text at bottom
                                    footer: {
                                        text: 'Developed by Heaveria',
                                        icon_url:
                                            'https://i.imgur.com/vHho1F5.png',
                                    },
                                },
                            ],
                        }),
                    }
                );
;}