import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { collection, onSnapshot, query, updateDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const FeatureProgress = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "features"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const featuresData = [];
      querySnapshot.forEach((doc) => {
        featuresData.push({ id: doc.id, ...doc.data() });
      });
      setFeatures(featuresData);
    });

    return () => unsubscribe();
  }, []);

  const handleCheckboxChange = async (id, completed) => {
    const featureDoc = doc(db, "features", id);
    await updateDoc(featureDoc, { completed: !completed });
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Feature Progress</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.id}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Checkbox
                    checked={feature.completed}
                    onCheckedChange={() => handleCheckboxChange(feature.id, feature.completed)}
                  />
                  <span className="ml-2">{feature.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProgress;