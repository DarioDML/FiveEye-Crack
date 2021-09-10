// FiveEye Server Config (BETA v0.1). Copyright (c) 2021, FiveEye.

FiveEye = { Main: {}, Utils: {}, Detections: {}, Webhooks: {} };

//
// License Key
//

FiveEye.Main.LicenseKey = 'TEVICHU X POLINI WEY'

//
// VPN Check
//

FiveEye.Utils.AntiVPN = false // Enables/Disables the Anti-VPN check
FiveEye.Utils.VPNKickReason = `Hemos detectado un uso de VPN/Proxy en tu dispositivo, por favor desactivalo o pregunta a los owners pancho.` // The reason to kick the user if the anti-VPN check is enabled

//
// Ban / Kick
//

FiveEye.Detections.Action = { ban: true, kick: true, screenshot: true } // Enables/Disables Kick/Ban/Screenshot
FiveEye.Detections.BanReason = `Has sido permanentemente baneado por hacker.` // The reason to ban the user (if enabled)
FiveEye.Detections.KickReason = `Has sido kickeado por hacker.` // The reason to kick the user (if enabled)

//
// Webhooks
//

FiveEye.Webhooks.DetectionWebhook = 'https://ptb.discord.com/api/webhooks/884952838550200350/NtuoLubGCygaavRWFeonJUUF4vSQH2pkV7kf7vKZueyfz65PasKhOJOqdpEtMJYCmIfn' // Set the URL of the detection webhook
FiveEye.Webhooks.KickWebhook = 'https://ptb.discord.com/api/webhooks/884952838550200350/NtuoLubGCygaavRWFeonJUUF4vSQH2pkV7kf7vKZueyfz65PasKhOJOqdpEtMJYCmIfn' // Set the URL of the kick webhook
FiveEye.Webhooks.BanWebhook = 'https://ptb.discord.com/api/webhooks/884952838550200350/NtuoLubGCygaavRWFeonJUUF4vSQH2pkV7kf7vKZueyfz65PasKhOJOqdpEtMJYCmIfn' // Set the URL of the ban webhook 