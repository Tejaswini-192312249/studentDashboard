export const revalidate = 0

const sections = [
  {
    title: "Profile",
    fields: [
      { label: "Full Name", value: "Tejaswini Pagadala", type: "text" },
      { label: "Email", value: "jayasimhaaeturi@gmail.com", type: "email" },
      { label: "Username", value: "tejaswini_pagadala", type: "text" },
    ],
  },
  {
    title: "Preferences",
    fields: [
      { label: "Daily Study Goal (hours)", value: "3", type: "number" },
      { label: "Timezone", value: "Asia/Kolkata", type: "text" },
    ],
  },
]

export default function SettingsPage() {
  return (
    <div className="w-full max-w-[640px]">
      <header className="mb-8">
        <span className="text-accent-end text-xs font-bold uppercase tracking-widest">Account</span>
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight mt-0.5">Settings</h1>
        <p className="text-text-muted text-sm mt-1">Manage your profile and preferences</p>
      </header>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="bg-tile-bg border border-border-default rounded-2xl p-6 space-y-5">
            <h2 className="text-sm font-semibold text-text-primary border-b border-border-default pb-3">
              {section.title}
            </h2>
            {section.fields.map((field) => (
              <div key={field.label} className="space-y-1.5">
                <label className="text-xs font-medium text-text-muted uppercase tracking-widest">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  defaultValue={field.value}
                  className="w-full bg-[#1e1e2a] border border-border-default rounded-xl px-4 py-2.5 text-sm text-text-primary outline-none focus:border-accent-start transition-colors duration-200"
                />
              </div>
            ))}
          </div>
        ))}

        <div className="bg-tile-bg border border-border-default rounded-2xl p-6 space-y-4">
          <h2 className="text-sm font-semibold text-text-primary border-b border-border-default pb-3">
            Notifications
          </h2>
          {[
            { label: "Daily study reminders", defaultChecked: true },
            { label: "Course completion alerts", defaultChecked: true },
            { label: "Weekly progress report", defaultChecked: true },
          ].map((toggle) => (
            <div key={toggle.label} className="flex items-center justify-between">
              <span className="text-sm text-text-primary">{toggle.label}</span>
              <input
                type="checkbox"
                defaultChecked={toggle.defaultChecked}
                className="w-4 h-4 accent-violet-500 cursor-pointer"
              />
            </div>
          ))}
        </div>

        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-accent-start to-accent-end text-white font-bold hover:shadow-[0_0_20px_rgba(124,108,240,0.4)] transition-all duration-200">
          Save Changes
        </button>
      </div>
    </div>
  )
}
