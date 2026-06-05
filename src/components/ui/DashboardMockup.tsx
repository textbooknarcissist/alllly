import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-premium">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-ink-muted">Total Balance</p>
          <p className="text-2xl font-bold text-primary">$48,294.50</p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">
          <TrendingUp size={12} />
          +12.4%
        </div>
      </div>
      <div className="mb-3 flex h-24 items-end gap-1.5">
        {[35, 48, 42, 58, 52, 68, 72, 65, 80, 88].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
            className="flex-1 rounded-t-sm bg-accent/80"
          />
        ))}
      </div>
      <div className="flex items-center justify-between text-xs text-ink-muted">
        <span>Spending</span>
        <span className="flex items-center gap-1 text-success">
          <ArrowUpRight size={12} />
          On track
        </span>
      </div>
    </div>
  );
}

export function PhoneMockup({ variant = "transactions" }: { variant?: "transactions" | "savings" | "investments" }) {
  const screens = {
    transactions: {
      title: "Recent Activity",
      balance: "$3,842.17",
      items: [
        { name: "Salary Deposit", amount: "+$4,200", positive: true },
        { name: "Grocery Store", amount: "-$86.40", positive: false },
        { name: "Transfer Out", amount: "-$250.00", positive: false },
      ],
    },
    savings: {
      title: "Savings Goals",
      balance: "$24,850.00",
      items: [
        { name: "Emergency Fund", amount: "78%", positive: true },
        { name: "Vacation", amount: "45%", positive: true },
        { name: "Home Down Payment", amount: "22%", positive: true },
      ],
    },
    investments: {
      title: "Portfolio",
      balance: "$12,400.00",
      items: [
        { name: "Index Funds", amount: "+8.2%", positive: true },
        { name: "Bonds", amount: "+3.1%", positive: true },
        { name: "ETFs", amount: "+11.4%", positive: true },
      ],
    },
  };

  const screen = screens[variant];

  return (
    <div className="overflow-hidden rounded-[2rem] border-[6px] border-primary/10 bg-white shadow-premium">
      <div className="bg-primary px-4 py-3">
        <div className="mx-auto h-1 w-12 rounded-full bg-white/30" />
      </div>
      <div className="p-4">
        <p className="text-[10px] font-medium text-ink-muted">{screen.title}</p>
        <p className="text-lg font-bold text-primary">{screen.balance}</p>
        <div className="mt-3 space-y-2">
          {screen.items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-lg bg-surface px-3 py-2"
            >
              <span className="text-[10px] font-medium text-primary">{item.name}</span>
              <span
                className={`text-[10px] font-semibold ${item.positive ? "text-success" : "text-accent"}`}
              >
                {item.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FloatingBalanceCard({
  label,
  value,
  delay = 0,
}: {
  label: string;
  value: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="glass-card rounded-xl px-4 py-3 shadow-premium"
    >
      <p className="text-[10px] font-medium text-white/60">{label}</p>
      <p className="text-sm font-bold text-white">{value}</p>
    </motion.div>
  );
}
