//@include [color.js]
//@include [style.js]
//@include [style-override.js]
sabre.import("color.min.js");
sabre.import("style.min.js");
sabre.import("style-override.min.js");
sabre["SSASubtitleEvent"] = function () {
    let obj = {
        id: NaN,
        layer: 0,
        start: 0,
        end: 0,
        style: null,
        overrides: null,
        lineOverrides: null,
        lineTransitionTargetOverrides: null,
        text: null
    };
    return Object.create(Object, {
        "toJSON": {
            value: function () {
                return {
                    id: obj.id,
                    l: obj.layer,
                    s: obj.start,
                    e: obj.end,
                    st: obj.style,
                    o: obj.overrides,
                    lO: obj.lineOverrides,
                    tO: obj.lineTransitionTargetOverrides,
                    t: obj.text
                };
            },
            writable: false
        },

        "setId": {
            value: function (/** number */ id) {
                obj.id = id;
            },
            writable: false
        },

        "getId": {
            value: function () {
                return obj.id;
            },
            writable: false
        },

        "setStart": {
            value: function (/** number */ start) {
                obj.start = start;
            },
            writable: false
        },

        "getStart": {
            value: function () {
                return obj.start;
            },
            writable: false
        },

        "setEnd": {
            value: function (/** number */ end) {
                obj.end = end;
            },
            writable: false
        },

        "getEnd": {
            value: function () {
                return obj.end;
            },
            writable: false
        },

        "setText": {
            value: function (/** string */ text) {
                obj.text = text;
            },
            writable: false
        },
        "getText": {
            value: function () {
                return obj.text;
            },
            writable: false
        },

        "setLayer": {
            value: function (/** number */ layer) {
                obj.layer = layer;
            },
            writable: false
        },

        "getLayer": {
            value: function () {
                return obj.layer;
            },
            writable: false
        },

        "setStyle": {
            value: function (/** SSAStyleDefinition */ style) {
                obj.style = style;
            },
            writable: false
        },

        "getStyle": {
            value: function () {
                return obj.style;
            },
            writable: false
        },

        "setOverrides": {
            value: function (/** SSAStyleOverride */ overrides) {
                obj.overrides = overrides;
            },
            writable: false
        },

        "getOverrides": {
            value: function () {
                return obj.overrides;
            },
            writable: false
        },

        "setLineOverrides": {
            value: function (/** SSALineStyleOverride */ line_overrides) {
                obj.lineOverrides = line_overrides;
            },
            writable: false
        },

        "getLineOverrides": {
            value: function () {
                return obj.lineOverrides;
            },
            writable: false
        },

        "setLineTransitionTargetOverrides": {
            value: function (
                /** SSALineTransitionTargetOverride */ line_overrides
            ) {
                obj.lineTransitionTargetOverrides = line_overrides;
            },
            writable: false
        },

        "getLineTransitionTargetOverrides": {
            value: function () {
                return obj.lineTransitionTargetOverrides;
            },
            writable: false
        }
    });
};
