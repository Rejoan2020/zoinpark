<div align="center">

<h1>ZoinPark</h1>
<h3>A Full-Stack Web3-Inspired Investment & Community Platform</h3>

Built with <b>Next.js 16, React 19, MongoDB, NextAuth, Tailwind CSS, and Server Actions</b>.

<p> <a href="https://zoinpark.vercel.app/">🌐 Live Demo</a> • <a href="https://github.com/Rejoan2020/zoinpark">📂 Repository</a> </p>

</div>

<div>
<h2>Overview</h2>

<p>
ZoinPark is a modern full-stack investment dashboard that simulates the core features of a real-world Web3 platform.

The application enables users to securely create an account, stake virtual assets, participate in community events, complete weekly challenges, earn rewards, manage their wallet, track referrals, and receive email notifications.
</p>
</div>

<div>
<h2>Features</h2>

<h3>Authentication</h3>
<ul>
<li>User Registration</li>
<li>Secure Login</li>
<li>Protected Routes</li>
<li>Password Reset via Email</li>
<li>Change Password</li>
<li>Session Management using NextAuth</li>
</ul> 

<h3>User profile</h3>
<ul>
<li>Showing Profile information</li> 
<li>Edit profile</li>
<li>Change password</li>
</ul>

<h3>Weekly Challenges</h3>
<ul>
<li>Weekly challenge progress bar</li>
<li>Referral Challenges</li>
<li>Daily Check-in tracking</li>
<li>Visit ZoinPark for 5 Consecutive Days</li>
<li>Visit ZoinPark for 7 Consecutive Days</li>
<li>Staking challenges</li>
<li>Challenges of joining community programs</li>
<li>Reward Claiming</li>
<li>Automatic Weekly Reset Logic</li>
</ul>

<h3>Staking</h3>
<ul>
<li>Multiple Staking Packages</li>
<li>APY Calculation</li>
<li>Daily Profit Calculation</li>
<li>Staking History</li>
<li>Wallet Integration</li>
<li>Different Investment Ranges</li> 
</ul>

<h3>Community Events</h3>
<ul>
<li>Browse Upcoming Events</li>
<li>Register for Events</li>
<li>Email Confirmation</li>
<li>Duplicate Registration Prevention</li>
</ul>

<h3>Referral System</h3>
<ul>
<li>Unique Referral Codes</li>
<li>Referral Tracking</li>
<li>Referral Rewards</li> 
</ul>

<h3>Invite and Earn</h3>
<ul>
<li>Invite through a unique relferral link</li>
<li>Invite by Email</li>
<li>Automatic invitaion rewards if the invitation is accepted</li> 
</ul>

<h3>Zoin calculations</h3>
<ul>
<li>Total zoin after any transaction</li>
<li>Total debit credit calculations</li>
<li>Total transaction history</li>
<li>Seperate staking history & daily withdraw system</li> 
<li>Search by ID in transaction history, staking history</li>
</ul>

<h3>Help and Support</h3>
<ul>
<li>Community access with Whatsapp, Telegram</li>
<li>Reach by Email</li>
<li>Ticket submission</li> 
<li>Ticket resopnse management</li> 
<li>Search by ticket ID</li> 
<li>Admin announcement</li>
<li>Amin announcement management</li>
</ul>

</div>

<div>
<h2>Tech Stack</h2>

<h3>Frontend</h3>
<ul>
<li>Next.js 16</li>
<li>React 19</li>
<li>Tailwind CSS</li>
<li>JavaScript (ES6+)</li>
</ul>

<h3>Backend</h3>
<ul>
<li>Next.js Server Actions</li>
<li>MongoDB Atlas</li>
<li>Mongoose ODM</li>
<li>NextAuth.js for authentication</li>
<li>Resend API for Email</li>
</ul>

<h3>Deployment</h3>
<ul>
<li>Vercel</li>
<li>MongoDB Atlas</li> 
</ul>
</div>

<div>
📂 Project Structure
app/
│
├── actions/
├── (auth)/
├── (dashboard)/
├── api/
│
components/
│
lib/
│
models/
│
public/
│
scripts/
│
styles/
</div>

<div>
<ul>
<li>Announcement</li>
<li>Event</li>
<li>EventRegistration</li>
<li>Notification</li>
<li>PasswordResetToken</li>
<li>Referral</li>
<li>StakePackage</li>
<li>Ticket</li>
<li>User</li>
<li>UserStake</li>
<li>userWeeklyChallenge</li>
<li>Wallet</li>
<li>WalletTransaction</li>
<li>weeklyChallenge</li>
</ul>
</div>

<div>
⚙️ Installation

Clone the repository

git clone https://github.com/Rejoan2020/zoinpark.git

Go inside the project

cd zoinpark

Install dependencies

npm install

Create a .env.local

MONGODB_URI=

NEXTAUTH_SECRET=

NEXTAUTH_URL=

AUTH_TRUST_HOST=

RESEND_API_KEY=

RESEND_FROM=

Run the development server

npm run dev
</div>

<div>
<h2>Production Features</h2>
<ul>
<li>Responsive Design</li>
<li>Server Components</li>
<li>Client Components</li>
<li>Server Actions</li>
<li>Secure Authentication</li>
<li>Database Validation</li>
<li>Error Handling</li>
<li>Email Notifications</li>
<li>Scalable Folder Structure</li>
<li>Reusable Components</li>
<li>Optimized Images</li>
<li>Protected Routes</li>
</ul>
</div>

<div>
<h2>Engineering Highlights</h2>

During development, special attention was given to:

<li>Designing scalable MongoDB schemas</li>
<li>Maintaining wallet transaction integrity</li>
<li>Preventing duplicate event registrations</li>
<li>Tracking consecutive-day challenge progress</li>
<li>Secure authentication using NextAuth</li>
<li>Reusable component architecture</li>
<li>Responsive UI across devices</li>
<li>Server-side rendering where appropriate</li>
<li>Efficient database queries using Mongoose</li>
</div>