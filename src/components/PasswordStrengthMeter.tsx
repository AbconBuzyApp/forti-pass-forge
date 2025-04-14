
import { useEffect, useState } from "react";
import { calculatePasswordStrength } from "@/utils/passwordUtils";
import { getTranslation } from "@/utils/i18n";
import { Language } from "@/types";

interface PasswordStrengthMeterProps {
  password: string;
  language: Language;
}

const PasswordStrengthMeter = ({ password, language }: PasswordStrengthMeterProps) => {
  const [strength, setStrength] = useState(() => calculatePasswordStrength(password));

  useEffect(() => {
    setStrength(calculatePasswordStrength(password));
  }, [password]);

  const getTranslatedLabel = () => {
    const labelKey = strength.label.toLowerCase().replace(/\s+/g, "");
    return getTranslation(labelKey, language);
  };

  return (
    <div className="mt-6 animate-fade-in">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{getTranslation("passwordStrength", language)}</span>
        <span className="text-sm font-medium">{getTranslatedLabel()}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div 
          className={`${strength.color} h-1.5 rounded-full transition-all duration-500 ease-in-out`}
          style={{ width: `${(strength.score / 4) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;
