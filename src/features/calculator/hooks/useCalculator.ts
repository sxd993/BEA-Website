import { useState } from "react";
import {
  projectTypes,
  additionalFeatures,
  timelineMultipliers,
  type ProjectType,
  type AdditionalFeature,
  type Timeline,
} from "../const/calculatorData";

export const useCalculator = () => {
  const [projectType, setProjectType] = useState<ProjectType>("landing");
  const [features, setFeatures] = useState<AdditionalFeature[]>([]);
  const [timeline, setTimeline] = useState<Timeline>("standard");

  const handleFeatureChange = (featureId: AdditionalFeature) => {
    if (features.includes(featureId)) {
      setFeatures(features.filter((f) => f !== featureId));
    } else {
      setFeatures([...features, featureId]);
    }
  };

  const calculatePrice = (): number => {
    const basePrice = projectTypes[projectType].price;
    const featuresPrice = features.reduce((sum, featureId) => {
      return sum + additionalFeatures[featureId].price;
    }, 0);
    const totalPrice =
      (basePrice + featuresPrice) *
      timelineMultipliers[timeline].multiplier;

    return Math.round(totalPrice);
  };

  return {
    projectType,
    setProjectType,
    features,
    timeline,
    setTimeline,
    handleFeatureChange,
    calculatePrice,
  };
};

