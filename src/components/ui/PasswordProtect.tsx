
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

interface PasswordProtectProps {
  correctPassword: string;
  onUnlock: () => void;
}

const PasswordProtect = ({ correctPassword, onUnlock }: PasswordProtectProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg shadow-2xl p-8 max-w-md w-full" style={{ boxShadow: '0 8px 32px 0 rgba(221, 199, 255, 0.15)' }}>
        <div className="flex flex-col items-center mb-6">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-3 rounded-full">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-xl font-semibold mt-4 text-white">Password Protected</h2>
          <p className="text-white/80 text-center mt-2">
            This project is password protected. Please enter the password to view it.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className={`backdrop-blur-xl bg-white/10 border-white/20 text-white placeholder:text-white/50 ${error ? "border-red-500" : ""}`}
            />
            {error && (
              <p className="text-red-400 text-sm mt-1">Incorrect password. Please try again.</p>
            )}
          </div>
          <Button type="submit" className="w-full bg-[#DDC7FF] hover:bg-[#DDC7FF]/90 text-black font-medium">
            Unlock
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtect;
