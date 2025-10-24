
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
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gray-100 p-3 rounded-full">
            <Lock className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-semibold mt-4">Password Protected</h2>
          <p className="text-gray-500 text-center mt-2">
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
              className={error ? "border-red-500" : ""}
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">Incorrect password. Please try again.</p>
            )}
          </div>
          <Button type="submit" className="w-full bg-bubble-purple hover:bg-opacity-90">
            Unlock
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtect;
