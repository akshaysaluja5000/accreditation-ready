import { useMemo, useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, startOfWeek, endOfWeek, addMonths, subMonths } from "date-fns";
import { Zap, CheckCircle2, XCircle, HelpCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { DailyActivity } from "@shared/schema";

interface DailyCalendarProps {
  activities: DailyActivity[];
  dailyGoal: number;
}

export function DailyCalendar({ activities, dailyGoal }: DailyCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentMonth));
    const end = endOfWeek(endOfMonth(currentMonth));
    return eachDayOfInterval({ start, end });
  }, [currentMonth]);

  const activityMap = useMemo(() => {
    const map = new Map<string, DailyActivity>();
    activities.forEach((a) => {
      map.set(a.date, a);
    });
    return map;
  }, [activities]);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const selectedActivity = selectedDate ? activityMap.get(selectedDate) : null;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-prev-month"
        >
          <ChevronLeft size={20} />
        </button>
        <h3 className="font-bold text-lg" data-testid="text-calendar-month">
          {format(currentMonth, "MMMM yyyy")}
        </h3>
        <button
          type="button"
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-next-month"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
          <div key={i} className="text-center text-xs font-bold text-muted-foreground py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          const dateStr = format(day, "yyyy-MM-dd");
          const activity = activityMap.get(dateStr);
          const isCurrentMonth = day >= monthStart && day <= monthEnd;
          const hasActivity = activity && activity.questionsAnswered > 0;
          const today = isToday(day);
          const isSelected = selectedDate === dateStr;

          return (
            <button
              key={dateStr}
              type="button"
              onClick={() => {
                if (isCurrentMonth) {
                  setSelectedDate(isSelected ? null : dateStr);
                }
              }}
              className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium relative transition-all ${
                !isCurrentMonth
                  ? "text-muted-foreground/30 cursor-default"
                  : "cursor-pointer hover:ring-2 hover:ring-primary/30"
              } ${
                isSelected
                  ? "ring-2 ring-primary bg-primary/10"
                  : today
                  ? "ring-2 ring-primary ring-offset-1 ring-offset-background"
                  : ""
              } ${
                hasActivity
                  ? "bg-chart-1/20 text-chart-1 font-bold"
                  : ""
              }`}
              data-testid={`calendar-day-${dateStr}`}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <div className="mt-4 rounded-xl bg-muted/50 border border-card-border p-4" data-testid="calendar-day-detail">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-sm">
              {format(new Date(selectedDate + "T12:00:00"), "EEEE, MMMM d, yyyy")}
            </h4>
            <button
              type="button"
              onClick={() => setSelectedDate(null)}
              className="text-muted-foreground hover:text-foreground"
              data-testid="button-close-day-detail"
            >
              <X size={16} />
            </button>
          </div>

          {selectedActivity && selectedActivity.questionsAnswered > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 rounded-lg bg-card border border-card-border p-3">
                <Zap size={16} className="text-chart-4 flex-shrink-0" />
                <div>
                  <p className="text-lg font-black" data-testid="text-day-xp">{selectedActivity.xpEarned}</p>
                  <p className="text-xs text-muted-foreground">XP Earned</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-card border border-card-border p-3">
                <HelpCircle size={16} className="text-primary flex-shrink-0" />
                <div>
                  <p className="text-lg font-black" data-testid="text-day-total">{selectedActivity.questionsAnswered}</p>
                  <p className="text-xs text-muted-foreground">Total Questions</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-card border border-card-border p-3">
                <CheckCircle2 size={16} className="text-chart-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-black text-chart-1" data-testid="text-day-correct">{selectedActivity.correctAnswers}</p>
                  <p className="text-xs text-muted-foreground">Correct</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-card border border-card-border p-3">
                <XCircle size={16} className="text-destructive flex-shrink-0" />
                <div>
                  <p className="text-lg font-black text-destructive" data-testid="text-day-wrong">{selectedActivity.questionsAnswered - selectedActivity.correctAnswers}</p>
                  <p className="text-xs text-muted-foreground">Wrong</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground" data-testid="text-day-no-activity">No activity on this day.</p>
          )}
        </div>
      )}

    </div>
  );
}
