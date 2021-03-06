import React, { useEffect, useState } from "react";
import { Alert, Dimensions, ScrollView } from "react-native";

import { HtmlView } from "../components";
import { AppSettingsService } from "../services";

const WIDTH = Dimensions.get("screen").width;

export const AboutUsScreen = () => {
  const [state, setState] = useState<{ aboutUs: string; website: string }>({
    aboutUs: "<p></p>",
    website: "",
  });

  useEffect(() => {
    AppSettingsService.getAppSettings()
      .then((res) =>
        setState({
          aboutUs: res.data.aboutUs,
          website: res.data.website,
        })
      )
      .catch((err) => Alert.alert(err.message));
  }, []);

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <HtmlView htmlContent={state.aboutUs} imagesMaxWidthOffset={WIDTH - 32} />
    </ScrollView>
  );
};
