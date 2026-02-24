# Cloud Collaboration Storage Tool

[cite_start]A secure, web-based cloud storage and collaboration platform designed to streamline file management for organizational teams[cite: 4]. [cite_start]This project serves as a high-performance, developer-centric alternative to traditional services, prioritizing speed and organizational hierarchy[cite: 7].

## 🚀 Key Features
* [cite_start]**Team Environments:** Users can create accounts, establish teams, and invite collaborators via a centralized dashboard[cite: 5].
* [cite_start]**Role-Based Access Control (RBAC):** Ensures data integrity through user-managed roles and strict permission gating[cite: 6, 11].
* [cite_start]**High Performance:** Utilizes Server-Side Rendering (SSR) and edge computing for faster load times and better security[cite: 12].
* [cite_start]**Dual-Layer Security:** Protection is enforced at both the UI level and the database level through Firebase Security Rules[cite: 21].

## 🛠️ Tech Stack
| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [cite_start]Astro [cite: 29] | [cite_start]App framework / High-performance rendering [cite: 16] |
| **Authentication** | [cite_start]Clerk [cite: 29] | [cite_start]Multi-tenant auth and organization logic [cite: 16, 18] |
| **Database/Storage** | [cite_start]Firebase [cite: 29] | [cite_start]Cloud Firestore (metadata) and Firebase Storage (files) [cite: 17] |
| **Styling** | [cite_start]Tailwind CSS [cite: 29] | [cite_start]Responsive UI styling [cite: 19] |
| **UI Components** | shadcn-svelte | [cite_start]Professional UI library [cite: 19] |



## 🏗️ Implementation Details
* [cite_start]**Middleware:** A custom layer intercepts requests to ensure users only access files associated with their specific `teamId`[cite: 20].
* [cite_start]**UI Logic:** Restricted actions like "Delete" or "Upload" are hidden from unauthorized users based on their role[cite: 21].
* [cite_start]**Data Flow:** Metadata is accurately written to Firestore only after a successful file upload to Firebase Storage[cite: 26].

## 🧪 Testing Strategy
1. [cite_start]**Unit Testing:** verifies that roles (Admin vs. Viewer) correctly return expected access booleans[cite: 24].
2. [cite_start]**Integration Testing:** focuses on the file upload pipeline and database synchronization[cite: 25, 26].
3. [cite_start]**Security Validation:** simulates unauthorized access attempts (e.g., cross-team URL access) to ensure the system is impenetrable[cite: 27].

---
[cite_start]**Author:** Joel Daniel Rico [cite: 2]

