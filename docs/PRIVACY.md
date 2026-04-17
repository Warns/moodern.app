# Moodern Privacy Policy

**Last updated:** April 17, 2026

This policy describes how the **Moodern** iOS app ("the App") handles information on your device and in your personal iCloud.

---

## Summary

Moodern is designed so your **mood logs and related notes stay under your control**. They are stored on your iPhone and, if you are signed into iCloud, mirrored to your **personal iCloud account** using Apple's CloudKit service. We do **not** operate our own servers to receive, store, or analyze your mood data. We do **not** use third-party analytics, advertising SDKs, or crash-reporting services that send your mood content to us in the current version of the App.

---

## Who this applies to

The App is published by the developer identified on the App Store listing (the "Developer"). The Developer does not collect mood data on its own systems as described in the sections below.

---

## Information the App stores on your device

### Mood entries

When you use the App, it saves **mood entries** locally using your device's internal storage. Each entry may include:

- **Mood** (your selected mood category)
- **Date and time** associated with the entry
- **Optional tags** you choose in the add-context flow
- **Optional free-text notes** you type

This data is stored in the App's **local database** on your device. If you are signed into iCloud, it is also mirrored to your personal iCloud account (see **iCloud sync** below).

### Preferences and settings

The App also stores **non-mood preferences** on your device, such as:

- **Appearance** (e.g. light/dark/system)
- **Character / bust style choices** used for illustrations
- **Daily reminder** settings (whether reminders are on and what time they are scheduled)
- **Onboarding** completion flags

These settings are used only to run the App on your device.

---

## iCloud sync

If you are signed into iCloud on your device, the App uses Apple's **CloudKit** service to mirror your mood entries to your **personal iCloud private database**. This means:

- Your entries are stored in **your own iCloud account**, not on Developer servers. The Developer cannot see, access, or retrieve this data.
- Entries **sync across devices** where you are signed into the same Apple ID and have iCloud Drive enabled for Moodern.
- Entries **survive uninstalling and reinstalling** the App, as long as the same iCloud account is signed in.
- Sync uses the storage quota of your **Apple iCloud plan**. If your iCloud storage is full, new entries still save to your device but will not mirror to iCloud until space is available.
- If you are **not signed into iCloud**, or you turn off iCloud for Moodern in system Settings, the App stores your entries **only on your device**. New entries will not mirror to iCloud until you re-enable it.

You can control iCloud sync for Moodern at any time in iOS:
**Settings → [Your Name] → iCloud → See All → Moodern**

Turning iCloud off for Moodern does not delete any existing data — entries on your device remain on your device, and entries already in your iCloud remain in your iCloud.

CloudKit is operated by Apple and governed by [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).

---

## Local notifications

If you enable **daily reminders**, the App schedules **local notifications** on your device. Reminder content is generic (for example, prompting you to log your mood). **We do not send push notifications from our servers** in the current version of the App.

Apple may show you a system permission prompt for notifications. That choice is between you and iOS; the Developer does not receive the content of your mood entries through notifications.

---

## Export

The App may offer **export** of your saved entries as a **JSON file** generated on your device. If you use **Share** or similar system features to send that file (for example to Mail, Files, or another app), **you** decide where it goes. The Developer does not receive that file unless you send it to us yourself.

---

## Data we do not collect (Developer systems)

In the current version of the App, the Developer does **not**:

- Require an account or login for core use of the App
- Operate backend servers that receive or store your mood entries (iCloud sync goes to **your** Apple account, not ours)
- Sell your mood data
- Use in-App third-party analytics or advertising tools that transmit your mood entries to the Developer

Some **optional features** in future versions of the App (clearly labeled in the interface) may send selected data to third-party services for processing — for example, to generate summaries or insights. Any such feature will be **off by default**, will disclose what is sent before enabling, and will use providers that commit to not retaining or training on the data. If this changes, we will update this policy and, where required, the App Store disclosures **before** enabling such features.

---

## Device backup

Apple may include App data in **iCloud Backup** or **local device backups** if you have those features enabled. Those backups are managed by **Apple** and your Apple ID, not by the Developer. This is separate from the **iCloud sync** described above, which stores mood entries directly in your iCloud account's private CloudKit database regardless of whether iCloud Backup is enabled.

---

## Children

The App is not directed at children in a way that changes this local-and-personal-iCloud design. Parents and guardians should review device and Apple ID settings (including Family Sharing and Screen Time) if a child uses the device.

---

## Security

Your mood data is protected by **standard iOS protections** for app sandboxing and device security (passcode, Face ID, Touch ID, etc.). Data synced to iCloud is protected by Apple's iCloud security, which includes end-to-end encryption for CloudKit private database content when **Advanced Data Protection** is enabled on your Apple ID. You are responsible for keeping your device and Apple ID secure.

---

## Changes to this policy

We may update this policy when the App changes. The **"Last updated"** date at the top will change when we do. Continued use of the App after an update means you accept the revised policy, except where applicable law requires otherwise.
