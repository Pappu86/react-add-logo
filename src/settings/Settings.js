const SettingHelpers = {
    DefaultPositions: function () {
        return ['left_breast', 'right_breast', 'left_sleeve', 'right_sleeve', 'big_back', 'nape_neck'];
    },
    getPositionName: function (opsitionName) {
        let position = "Left Breast";

        if (opsitionName === "right_breast") {
            position = "Right Breast";
        } else if (opsitionName === "left_sleeve") {
            position = "Left Sleeve";
        } else if (opsitionName === "right_sleeve") {
            position = "Right Sleeve";
        } else if (opsitionName === "big_back") {
            position = "Big Back";
        } else if (opsitionName === "nape_neck") {
            position = "Nape Neck";
        }

        return position;
    }
};

export default SettingHelpers;