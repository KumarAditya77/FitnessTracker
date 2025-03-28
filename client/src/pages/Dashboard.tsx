import { useState } from "react";
import { format } from "date-fns";
import DailyOverview from "@/components/dashboard/DailyOverview";
import FoodTracker from "@/components/dashboard/FoodTracker";
import RecommendedRecipes from "@/components/dashboard/RecommendedRecipes";
import ExerciseTracker from "@/components/dashboard/ExerciseTracker";
import ShopSection from "@/components/dashboard/ShopSection";
import ContributeSection from "@/components/dashboard/ContributeSection";

export default function Dashboard() {
  // In a real app, this would come from a user context or API
  const [user] = useState({
    firstName: "Alex",
    lastName: "Smith",
    fitnessGoal: "musclegain",
    dailyCalorieGoal: 2200,
    dailyProteinGoal: 140,
    dailyCarbsGoal: 220,
    dailyFatGoal: 70
  });

  // Current nutritional progress
  const [nutritionProgress] = useState({
    calories: { consumed: 1450, goal: user.dailyCalorieGoal, remaining: user.dailyCalorieGoal - 1450 },
    protein: { consumed: 85, goal: user.dailyProteinGoal, remaining: user.dailyProteinGoal - 85 },
    carbs: { consumed: 120, goal: user.dailyCarbsGoal, remaining: user.dailyCarbsGoal - 120 },
    fat: { consumed: 45, goal: user.dailyFatGoal, remaining: user.dailyFatGoal - 45 }
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.firstName}</h1>
          <p className="text-sm text-gray-500">Track your fitness journey and nutrition goals</p>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="text-sm font-medium text-gray-500">Today's Date:</span>
          <span className="ml-2 text-sm font-medium text-gray-900">{format(new Date(), "MMMM d, yyyy")}</span>
        </div>
      </div>

      <DailyOverview nutritionProgress={nutritionProgress} />
      
      <FoodTracker />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <RecommendedRecipes nutritionProgress={nutritionProgress} fitnessGoal={user.fitnessGoal} />
        <ExerciseTracker />
      </div>
      
      <ShopSection />
      
      <ContributeSection />
    </div>
  );
}
