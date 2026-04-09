"use client";

import { useState, useOptimistic, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function OptimisticNewsletter() {
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState<"idle" | "success" | "error">("idle");
  
  // The "real" state for UI output
  const [realSuccess, setRealSuccess] = useState(false);

  // useOptimistic state: returns [currentValue, addOptimisticAction]
  // We'll use it to show success instantly while the network handles the request.
  const [optimisticSuccess, addOptimisticSuccess] = useOptimistic(
    realSuccess,
    (state, newState: boolean) => newState
  );

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email");
    if (!email) return;

    // 1. Instantly trigger the optimistic success state
    startTransition(() => {
      addOptimisticSuccess(true);
    });

    // 2. Simulate network request (latency)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // 3. Update the global "real" state
    setRealSuccess(true);
    setFormState("success");
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-background/50 p-8 backdrop-blur-xl md:p-12">
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto space-y-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Mail className="h-6 w-6" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight">Stay Updated</h3>
          <p className="text-muted-foreground">
            Subscribe to my newsletter for insights on full-stack architecture and frontend fluidity.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {optimisticSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="flex items-center gap-2 text-primary font-medium bg-primary/10 px-6 py-3 rounded-full"
            >
              <CheckCircle className="h-5 w-5" />
              Directly into your inbox!
            </motion.div>
          ) : (
            <motion.form
              key="form"
              action={handleSubmit}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <Input
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="h-12 rounded-full border-border/50 bg-background/80 px-6 focus-visible:ring-primary/20"
                />
              </div>
              <Button type="submit" size="lg" className="h-12 rounded-full px-8 font-semibold transition-all active:scale-95">
                {isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Subscribe"
                )}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
        
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
      
      {/* Background Glow */}
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />
    </div>
  );
}
