namespace Builder{
    enum ImageFormat{
        Png = 'png',
        Jpeg = 'jpeg'
    }

    interface IResolution{
        width: number;
        height: number;
    }

    interface IImageConversion extends IResolution{
        format: ImageFormat;
    }

    class ImageBuilder{ // class - builder
        private formats: ImageFormat[] = [];
        private resolutions: IResolution[] = [];

        addPng(){
            if(this.formats.includes(ImageFormat.Png)){
                return this;
            }
            this.formats.push(ImageFormat.Png);
            return this;
        }

        addJpeg(){
            if(this.formats.includes(ImageFormat.Jpeg)){
                return this;
            }
            this.formats.push(ImageFormat.Jpeg);
            return this;
        }

        addResolution(width: number, height: number){
            if(this.resolutions.includes({width, height})){
                return this;
            }
            this.resolutions.push({width, height});
            return this;
        }

        build(): IImageConversion[]{
            const res: IImageConversion[] = [];

            for(const resolution_ of this.resolutions){
                for(const format_ of this.formats){
                    const obj: IImageConversion = {
                        format: format_,
                        width: resolution_.width,
                        height: resolution_.height
                    }
                    res.push(obj);
                }
            }

            return res;
        }
    }

    // пример использования
    console.log(new ImageBuilder()
        .addJpeg()
        .addPng()
        .addResolution(200, 400)
        .addResolution(1200, 1200)
        .build()
    );
}