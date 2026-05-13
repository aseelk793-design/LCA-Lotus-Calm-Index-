import {
  pgTable,
  serial,
  integer,
  real,
  timestamp,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const cognitiveProfileTable = pgTable("cognitive_profile", {
  id: serial("id").primaryKey(),
  peakFocusHourStart: integer("peak_focus_hour_start").notNull().default(9),
  peakFocusHourEnd: integer("peak_focus_hour_end").notNull().default(12),
  avgAttentionSpanMinutes: real("avg_attention_span_minutes").notNull().default(25),
  fatigueThreshold: real("fatigue_threshold").notNull().default(20),
  baselineWpm: real("baseline_wpm"),
  baselinePauseRate: real("baseline_pause_rate"),
  totalSessions: integer("total_sessions").notNull().default(0),
  totalFocusMinutes: real("total_focus_minutes").notNull().default(0),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const insertCognitiveProfileSchema = createInsertSchema(cognitiveProfileTable).omit({
  id: true,
  updatedAt: true,
});
export type InsertCognitiveProfile = z.infer<typeof insertCognitiveProfileSchema>;
export type CognitiveProfile = typeof cognitiveProfileTable.$inferSelect;
