
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Copy, Download, Eye, EyeOff, RefreshCw } from "lucide-react";
import { PasswordOptions, Language } from "@/types";
import { generatePassword, downloadPassword } from "@/utils/passwordUtils";
import { getTranslation } from "@/utils/i18n";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { useToast } from "@/hooks/use-toast";

interface PasswordGeneratorProps {
  language: Language;
}

const PasswordGenerator = ({ language }: PasswordGeneratorProps) => {
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState<PasswordOptions>({
    length: 16,
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeSimilarChars: false,
  });

  useEffect(() => {
    handleGeneratePassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(options);
    setPassword(newPassword);
    setCopied(false);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    toast({
      title: getTranslation("copied", language),
      duration: 2000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    downloadPassword(password);
  };

  const handleOptionChange = (key: keyof PasswordOptions, value: boolean | number) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="animate-fade-in">
      <Card className="shadow-md border border-gray-200">
        <CardContent className="pt-6">
          <div className="password-container mb-6">
            <div className="flex items-center">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                readOnly
                className="pr-24 font-mono border-2 border-gray-300 focus:border-fortipass-purple"
              />
              <div className="absolute right-3 flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  className="h-8 w-8 p-0"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyToClipboard}
                  className="h-8 w-8 p-0"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium">
                {getTranslation("passwordLength", language)}: {options.length}
              </label>
            </div>
            <Slider
              value={[options.length]}
              min={8}
              max={64}
              step={1}
              onValueChange={(value) => handleOptionChange("length", value[0])}
              className="my-4"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>8</span>
              <span>36</span>
              <span>64</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium mb-3">
              {getTranslation("options", language)}
            </h3>

            {[
              {
                key: "includeLowercase",
                label: "lowercaseLetters",
              },
              {
                key: "includeUppercase",
                label: "uppercaseLetters",
              },
              {
                key: "includeNumbers",
                label: "numbers",
              },
              {
                key: "includeSymbols",
                label: "symbols",
              },
              {
                key: "excludeSimilarChars",
                label: "excludeSimilar",
              },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <label className="text-sm">
                  {getTranslation(item.label, language)}
                </label>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={options[item.key as keyof PasswordOptions] as boolean}
                    onChange={(e) =>
                      handleOptionChange(
                        item.key as keyof PasswordOptions,
                        e.target.checked
                      )
                    }
                    className="opacity-0 w-0 h-0"
                  />
                  <span className="toggle-slider"></span>
                </div>
              </div>
            ))}
          </div>

          <PasswordStrengthMeter password={password} language={language} />

          <div className="flex space-x-3 mt-6">
            <Button
              onClick={handleGeneratePassword}
              className="flex-1 bg-fortipass-purple hover:bg-fortipass-dark-purple"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              {getTranslation("generate", language)}
            </Button>
            <Button
              onClick={handleDownload}
              variant="outline"
              className="w-12 p-0 flex-shrink-0 border-fortipass-purple text-fortipass-purple hover:text-fortipass-dark-purple hover:border-fortipass-dark-purple"
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordGenerator;
