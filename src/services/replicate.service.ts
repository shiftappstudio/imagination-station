import { replicate } from "../configs/replicate.config";

export const sdxl = async (prompt: string) => {
  try {
    const output = await replicate.run(
      "black-forest-labs/flux-schnell",
      {
        input: {
          prompt: prompt,
          go_fast: true,
          megapixels: "1",
          num_outputs: 1,
          aspect_ratio: "1:1",
          output_format: "webp",
          output_quality: 80,
          num_inference_steps: 4
        },
      }
    );
    return output;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const wuerstchen_v2 = async (prompt: string) => {
  try {
    const output = await replicate.run(
      "pagebrain/wuerstchen-v2:0725c5f70905b87ffadd7d6fe4cfae1b5457784d911eebd8521022892deb481a",
      {
        input: {
          prompt: prompt,
          negative_prompt: "extra fingers , crossed fingers , bad hand",
          width: 1024,
          height: 1024,
          prior_num_inference_steps: 30,
        },
      }
    );
    return output;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
