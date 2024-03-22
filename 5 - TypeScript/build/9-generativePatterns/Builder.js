"use strict";
var Builder;
(function (Builder) {
    let ImageFormat;
    (function (ImageFormat) {
        ImageFormat["Png"] = "png";
        ImageFormat["Jpeg"] = "jpeg";
    })(ImageFormat || (ImageFormat = {}));
    class ImageBuilder {
        constructor() {
            this.formats = [];
            this.resolutions = [];
        }
        addPng() {
            if (this.formats.includes(ImageFormat.Png)) {
                return this;
            }
            this.formats.push(ImageFormat.Png);
            return this;
        }
        addJpeg() {
            if (this.formats.includes(ImageFormat.Jpeg)) {
                return this;
            }
            this.formats.push(ImageFormat.Jpeg);
            return this;
        }
        addResolution(width, height) {
            if (this.resolutions.includes({ width, height })) {
                return this;
            }
            this.resolutions.push({ width, height });
            return this;
        }
        build() {
            const res = [];
            for (const resolution_ of this.resolutions) {
                for (const format_ of this.formats) {
                    const obj = {
                        format: format_,
                        width: resolution_.width,
                        height: resolution_.height
                    };
                    res.push(obj);
                }
            }
            return res;
        }
    }
    console.log(new ImageBuilder()
        .addJpeg()
        .addPng()
        .addResolution(200, 400)
        .addResolution(1200, 1200)
        .build());
})(Builder || (Builder = {}));
