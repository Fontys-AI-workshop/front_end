/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Body_login_login__post */
export interface BodyLoginLoginPost {
	/**
	 * Grant Type
	 * @pattern password
	 */
	grant_type?: string
	/** Username */
	username: string
	/** Password */
	password: string
	/**
	 * Scope
	 * @default ""
	 */
	scope?: string
	/** Client Id */
	client_id?: string
	/** Client Secret */
	client_secret?: string
}

/** Body_login_login_post */
export interface BodyLoginLoginPost {
	/**
	 * Grant Type
	 * @pattern password
	 */
	grant_type?: string
	/** Username */
	username: string
	/** Password */
	password: string
	/**
	 * Scope
	 * @default ""
	 */
	scope?: string
	/** Client Id */
	client_id?: string
	/** Client Secret */
	client_secret?: string
}

/** Body_upload_file_upload_post */
export interface BodyUploadFileUploadPost {
	/** Files */
	files: File[]
}

/** CreateResponse */
export interface CreateResponse {
	/**
	 * Create info
	 * Response string from create embedding or hypernetwork task.
	 */
	info: string
}

/** EmbeddingItem */
export interface EmbeddingItem {
	/**
	 * Step
	 * The number of steps that were used to train this embedding, if available
	 */
	step?: number
	/**
	 * SD Checkpoint
	 * The hash of the checkpoint this embedding was trained on, if available
	 */
	sd_checkpoint?: string
	/**
	 * SD Checkpoint Name
	 * The name of the checkpoint this embedding was trained on, if available. Note that this is the name that was used by the trainer; for a stable identifier, use `sd_checkpoint` instead
	 */
	sd_checkpoint_name?: string
	/**
	 * Shape
	 * The length of each individual vector in the embedding
	 */
	shape: number
	/**
	 * Vectors
	 * The number of vectors in the embedding
	 */
	vectors: number
}

/** EmbeddingsResponse */
export interface EmbeddingsResponse {
	/**
	 * Loaded
	 * Embeddings loaded for the current model
	 */
	loaded: Record<string, EmbeddingItem>
	/**
	 * Skipped
	 * Embeddings skipped for the current model (likely due to architecture incompatibility)
	 */
	skipped: Record<string, EmbeddingItem>
}

/** Estimation */
export interface Estimation {
	/**
	 * Msg
	 * @default "estimation"
	 */
	msg?: string
	/** Rank */
	rank?: number
	/** Queue Size */
	queue_size: number
	/** Avg Event Process Time */
	avg_event_process_time?: number
	/** Avg Event Concurrent Process Time */
	avg_event_concurrent_process_time?: number
	/** Rank Eta */
	rank_eta?: number
	/** Queue Eta */
	queue_eta: number
}

/** ExtrasBatchImagesRequest */
export interface ExtrasBatchImagesRequest {
	/**
	 * Resize Mode
	 * Sets the resize mode: 0 to upscale by upscaling_resize amount, 1 to upscale up to upscaling_resize_h x upscaling_resize_w.
	 * @default 0
	 */
	resize_mode?: 0 | 1
	/**
	 * Show results
	 * Should the backend return the generated image?
	 * @default true
	 */
	show_extras_results?: boolean
	/**
	 * GFPGAN Visibility
	 * Sets the visibility of GFPGAN, values should be between 0 and 1.
	 * @min 0
	 * @max 1
	 * @default 0
	 */
	gfpgan_visibility?: number
	/**
	 * CodeFormer Visibility
	 * Sets the visibility of CodeFormer, values should be between 0 and 1.
	 * @min 0
	 * @max 1
	 * @default 0
	 */
	codeformer_visibility?: number
	/**
	 * CodeFormer Weight
	 * Sets the weight of CodeFormer, values should be between 0 and 1.
	 * @min 0
	 * @max 1
	 * @default 0
	 */
	codeformer_weight?: number
	/**
	 * Upscaling Factor
	 * By how much to upscale the image, only used when resize_mode=0.
	 * @min 1
	 * @max 8
	 * @default 2
	 */
	upscaling_resize?: number
	/**
	 * Target Width
	 * Target width for the upscaler to hit. Only used when resize_mode=1.
	 * @min 1
	 * @default 512
	 */
	upscaling_resize_w?: number
	/**
	 * Target Height
	 * Target height for the upscaler to hit. Only used when resize_mode=1.
	 * @min 1
	 * @default 512
	 */
	upscaling_resize_h?: number
	/**
	 * Crop to fit
	 * Should the upscaler crop the image to fit in the chosen size?
	 * @default true
	 */
	upscaling_crop?: boolean
	/**
	 * Main upscaler
	 * The name of the main upscaler to use, it has to be one of this list: None , Lanczos , Nearest , ESRGAN_4x , LDSR , R-ESRGAN 4x+ , R-ESRGAN 4x+ Anime6B , ScuNET GAN , ScuNET PSNR , SwinIR 4x
	 * @default "None"
	 */
	upscaler_1?: string
	/**
	 * Secondary upscaler
	 * The name of the secondary upscaler to use, it has to be one of this list: None , Lanczos , Nearest , ESRGAN_4x , LDSR , R-ESRGAN 4x+ , R-ESRGAN 4x+ Anime6B , ScuNET GAN , ScuNET PSNR , SwinIR 4x
	 * @default "None"
	 */
	upscaler_2?: string
	/**
	 * Secondary upscaler visibility
	 * Sets the visibility of secondary upscaler, values should be between 0 and 1.
	 * @min 0
	 * @max 1
	 * @default 0
	 */
	extras_upscaler_2_visibility?: number
	/**
	 * Upscale first
	 * Should the upscaler run before restoring faces?
	 * @default false
	 */
	upscale_first?: boolean
	/**
	 * Images
	 * List of images to work on. Must be Base64 strings
	 */
	imageList: FileData[]
}

/** ExtrasBatchImagesResponse */
export interface ExtrasBatchImagesResponse {
	/**
	 * HTML info
	 * A series of HTML tags containing the process info.
	 */
	html_info: string
	/**
	 * Images
	 * The generated images in base64 format.
	 */
	images: string[]
}

/** ExtrasSingleImageRequest */
export interface ExtrasSingleImageRequest {
	/**
	 * Resize Mode
	 * Sets the resize mode: 0 to upscale by upscaling_resize amount, 1 to upscale up to upscaling_resize_h x upscaling_resize_w.
	 * @default 0
	 */
	resize_mode?: 0 | 1
	/**
	 * Show results
	 * Should the backend return the generated image?
	 * @default true
	 */
	show_extras_results?: boolean
	/**
	 * GFPGAN Visibility
	 * Sets the visibility of GFPGAN, values should be between 0 and 1.
	 * @min 0
	 * @max 1
	 * @default 0
	 */
	gfpgan_visibility?: number
	/**
	 * CodeFormer Visibility
	 * Sets the visibility of CodeFormer, values should be between 0 and 1.
	 * @min 0
	 * @max 1
	 * @default 0
	 */
	codeformer_visibility?: number
	/**
	 * CodeFormer Weight
	 * Sets the weight of CodeFormer, values should be between 0 and 1.
	 * @min 0
	 * @max 1
	 * @default 0
	 */
	codeformer_weight?: number
	/**
	 * Upscaling Factor
	 * By how much to upscale the image, only used when resize_mode=0.
	 * @min 1
	 * @max 8
	 * @default 2
	 */
	upscaling_resize?: number
	/**
	 * Target Width
	 * Target width for the upscaler to hit. Only used when resize_mode=1.
	 * @min 1
	 * @default 512
	 */
	upscaling_resize_w?: number
	/**
	 * Target Height
	 * Target height for the upscaler to hit. Only used when resize_mode=1.
	 * @min 1
	 * @default 512
	 */
	upscaling_resize_h?: number
	/**
	 * Crop to fit
	 * Should the upscaler crop the image to fit in the chosen size?
	 * @default true
	 */
	upscaling_crop?: boolean
	/**
	 * Main upscaler
	 * The name of the main upscaler to use, it has to be one of this list: None , Lanczos , Nearest , ESRGAN_4x , LDSR , R-ESRGAN 4x+ , R-ESRGAN 4x+ Anime6B , ScuNET GAN , ScuNET PSNR , SwinIR 4x
	 * @default "None"
	 */
	upscaler_1?: string
	/**
	 * Secondary upscaler
	 * The name of the secondary upscaler to use, it has to be one of this list: None , Lanczos , Nearest , ESRGAN_4x , LDSR , R-ESRGAN 4x+ , R-ESRGAN 4x+ Anime6B , ScuNET GAN , ScuNET PSNR , SwinIR 4x
	 * @default "None"
	 */
	upscaler_2?: string
	/**
	 * Secondary upscaler visibility
	 * Sets the visibility of secondary upscaler, values should be between 0 and 1.
	 * @min 0
	 * @max 1
	 * @default 0
	 */
	extras_upscaler_2_visibility?: number
	/**
	 * Upscale first
	 * Should the upscaler run before restoring faces?
	 * @default false
	 */
	upscale_first?: boolean
	/**
	 * Image
	 * Image to work on, must be a Base64 string containing the image's data.
	 * @default ""
	 */
	image?: string
}

/** ExtrasSingleImageResponse */
export interface ExtrasSingleImageResponse {
	/**
	 * HTML info
	 * A series of HTML tags containing the process info.
	 */
	html_info: string
	/**
	 * Image
	 * The generated image in base64 format.
	 */
	image?: string
}

/** FaceRestorerItem */
export interface FaceRestorerItem {
	/** Name */
	name: string
	/** Path */
	cmd_dir?: string
}

/** FileData */
export interface FileData {
	/**
	 * File data
	 * Base64 representation of the file
	 */
	data: string
	/** File name */
	name: string
}

/** Flags */
export interface Flags {
	/**
	 * F
	 * ==SUPPRESS==
	 * @default false
	 */
	f?: boolean
	/**
	 * Update All Extensions
	 * launch.py argument: download updates for all extensions when starting the program
	 * @default false
	 */
	update_all_extensions?: boolean
	/**
	 * Skip Python Version Check
	 * launch.py argument: do not check python version
	 * @default false
	 */
	skip_python_version_check?: boolean
	/**
	 * Skip Torch Cuda Test
	 * launch.py argument: do not check if CUDA is able to work properly
	 * @default false
	 */
	skip_torch_cuda_test?: boolean
	/**
	 * Reinstall Xformers
	 * launch.py argument: install the appropriate version of xformers even if you have some version already installed
	 * @default false
	 */
	reinstall_xformers?: boolean
	/**
	 * Reinstall Torch
	 * launch.py argument: install the appropriate version of torch even if you have some version already installed
	 * @default false
	 */
	reinstall_torch?: boolean
	/**
	 * Update Check
	 * launch.py argument: check for updates at startup
	 * @default false
	 */
	update_check?: boolean
	/**
	 * Test Server
	 * launch.py argument: configure server for testing
	 * @default false
	 */
	test_server?: boolean
	/**
	 * Log Startup
	 * launch.py argument: print a detailed log of what's happening at startup
	 * @default false
	 */
	log_startup?: boolean
	/**
	 * Skip Prepare Environment
	 * launch.py argument: skip all environment preparation
	 * @default false
	 */
	skip_prepare_environment?: boolean
	/**
	 * Skip Install
	 * launch.py argument: skip installation of packages
	 * @default false
	 */
	skip_install?: boolean
	/**
	 * Dump Sysinfo
	 * launch.py argument: dump limited sysinfo file (without information about extensions, options) to disk and quit
	 * @default false
	 */
	dump_sysinfo?: boolean
	/**
	 * Loglevel
	 * log level; one of: CRITICAL, ERROR, WARNING, INFO, DEBUG
	 */
	loglevel?: string
	/**
	 * Do Not Download Clip
	 * do not download CLIP model even if it's not included in the checkpoint
	 * @default false
	 */
	do_not_download_clip?: boolean
	/**
	 * Data Dir
	 * base path where all user data is stored
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui"
	 */
	data_dir?: string
	/**
	 * Config
	 * path to config which constructs model
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\configs\v1-inference.yaml"
	 */
	config?: string
	/**
	 * Ckpt
	 * path to checkpoint of stable diffusion model; if specified, this checkpoint will be added to the list of checkpoints and loaded
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\model.ckpt"
	 */
	ckpt?: string
	/**
	 * Ckpt Dir
	 * Path to directory with stable diffusion checkpoints
	 */
	ckpt_dir?: string
	/**
	 * Vae Dir
	 * Path to directory with VAE files
	 */
	vae_dir?: string
	/**
	 * Gfpgan Dir
	 * GFPGAN directory
	 * @default "./GFPGAN"
	 */
	gfpgan_dir?: string
	/**
	 * Gfpgan Model
	 * GFPGAN model file name
	 */
	gfpgan_model?: string
	/**
	 * No Half
	 * do not switch the model to 16-bit floats
	 * @default false
	 */
	no_half?: boolean
	/**
	 * No Half Vae
	 * do not switch the VAE model to 16-bit floats
	 * @default false
	 */
	no_half_vae?: boolean
	/**
	 * No Progressbar Hiding
	 * do not hide progressbar in gradio UI (we hide it because it slows down ML if you have hardware acceleration in browser)
	 * @default false
	 */
	no_progressbar_hiding?: boolean
	/**
	 * Max Batch Count
	 * maximum batch count value for the UI
	 * @default 16
	 */
	max_batch_count?: number
	/**
	 * Embeddings Dir
	 * embeddings directory for textual inversion (default: embeddings)
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\embeddings"
	 */
	embeddings_dir?: string
	/**
	 * Textual Inversion Templates Dir
	 * directory with textual inversion templates
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\textual_inversion_templates"
	 */
	textual_inversion_templates_dir?: string
	/**
	 * Hypernetwork Dir
	 * hypernetwork directory
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\models\hypernetworks"
	 */
	hypernetwork_dir?: string
	/**
	 * Localizations Dir
	 * localizations directory
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\localizations"
	 */
	localizations_dir?: string
	/**
	 * Allow Code
	 * allow custom script execution from webui
	 * @default false
	 */
	allow_code?: boolean
	/**
	 * Medvram
	 * enable stable diffusion model optimizations for sacrificing a little speed for low VRM usage
	 * @default false
	 */
	medvram?: boolean
	/**
	 * Medvram Sdxl
	 * enable --medvram optimization just for SDXL models
	 * @default false
	 */
	medvram_sdxl?: boolean
	/**
	 * Lowvram
	 * enable stable diffusion model optimizations for sacrificing a lot of speed for very low VRM usage
	 * @default false
	 */
	lowvram?: boolean
	/**
	 * Lowram
	 * load stable diffusion checkpoint weights to VRAM instead of RAM
	 * @default false
	 */
	lowram?: boolean
	/**
	 * Always Batch Cond Uncond
	 * does not do anything
	 * @default false
	 */
	always_batch_cond_uncond?: boolean
	/**
	 * Unload Gfpgan
	 * does not do anything.
	 * @default false
	 */
	unload_gfpgan?: boolean
	/**
	 * Precision
	 * evaluate at this precision
	 * @default "autocast"
	 */
	precision?: string
	/**
	 * Upcast Sampling
	 * upcast sampling. No effect with --no-half. Usually produces similar results to --no-half with better performance while using less memory.
	 * @default false
	 */
	upcast_sampling?: boolean
	/**
	 * Share
	 * use share=True for gradio and make the UI accessible through their site
	 * @default false
	 */
	share?: boolean
	/**
	 * Ngrok
	 * ngrok authtoken, alternative to gradio --share
	 */
	ngrok?: string
	/**
	 * Ngrok Region
	 * does not do anything.
	 * @default ""
	 */
	ngrok_region?: string
	/**
	 * Ngrok Options
	 * The options to pass to ngrok in JSON format, e.g.: '{"authtoken_from_env":true, "basic_auth":"user:password", "oauth_provider":"google", "oauth_allow_emails":"user@asdf.com"}'
	 * @default {}
	 */
	ngrok_options?: object
	/**
	 * Enable Insecure Extension Access
	 * enable extensions tab regardless of other options
	 * @default false
	 */
	enable_insecure_extension_access?: boolean
	/**
	 * Codeformer Models Path
	 * Path to directory with codeformer model file(s).
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\models\Codeformer"
	 */
	codeformer_models_path?: string
	/**
	 * Gfpgan Models Path
	 * Path to directory with GFPGAN model file(s).
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\models\GFPGAN"
	 */
	gfpgan_models_path?: string
	/**
	 * Esrgan Models Path
	 * Path to directory with ESRGAN model file(s).
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\models\ESRGAN"
	 */
	esrgan_models_path?: string
	/**
	 * Bsrgan Models Path
	 * Path to directory with BSRGAN model file(s).
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\models\BSRGAN"
	 */
	bsrgan_models_path?: string
	/**
	 * Realesrgan Models Path
	 * Path to directory with RealESRGAN model file(s).
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\models\RealESRGAN"
	 */
	realesrgan_models_path?: string
	/**
	 * Clip Models Path
	 * Path to directory with CLIP model file(s).
	 */
	clip_models_path?: string
	/**
	 * Xformers
	 * enable xformers for cross attention layers
	 * @default false
	 */
	xformers?: boolean
	/**
	 * Force Enable Xformers
	 * enable xformers for cross attention layers regardless of whether the checking code thinks you can run it; do not make bug reports if this fails to work
	 * @default false
	 */
	force_enable_xformers?: boolean
	/**
	 * Xformers Flash Attention
	 * enable xformers with Flash Attention to improve reproducibility (supported for SD2.x or variant only)
	 * @default false
	 */
	xformers_flash_attention?: boolean
	/**
	 * Deepdanbooru
	 * does not do anything
	 * @default false
	 */
	deepdanbooru?: boolean
	/**
	 * Opt Split Attention
	 * prefer Doggettx's cross-attention layer optimization for automatic choice of optimization
	 * @default false
	 */
	opt_split_attention?: boolean
	/**
	 * Opt Sub Quad Attention
	 * prefer memory efficient sub-quadratic cross-attention layer optimization for automatic choice of optimization
	 * @default false
	 */
	opt_sub_quad_attention?: boolean
	/**
	 * Sub Quad Q Chunk Size
	 * query chunk size for the sub-quadratic cross-attention layer optimization to use
	 * @default 1024
	 */
	sub_quad_q_chunk_size?: number
	/**
	 * Sub Quad Kv Chunk Size
	 * kv chunk size for the sub-quadratic cross-attention layer optimization to use
	 */
	sub_quad_kv_chunk_size?: string
	/**
	 * Sub Quad Chunk Threshold
	 * the percentage of VRAM threshold for the sub-quadratic cross-attention layer optimization to use chunking
	 */
	sub_quad_chunk_threshold?: string
	/**
	 * Opt Split Attention Invokeai
	 * prefer InvokeAI's cross-attention layer optimization for automatic choice of optimization
	 * @default false
	 */
	opt_split_attention_invokeai?: boolean
	/**
	 * Opt Split Attention V1
	 * prefer older version of split attention optimization for automatic choice of optimization
	 * @default false
	 */
	opt_split_attention_v1?: boolean
	/**
	 * Opt Sdp Attention
	 * prefer scaled dot product cross-attention layer optimization for automatic choice of optimization; requires PyTorch 2.*
	 * @default false
	 */
	opt_sdp_attention?: boolean
	/**
	 * Opt Sdp No Mem Attention
	 * prefer scaled dot product cross-attention layer optimization without memory efficient attention for automatic choice of optimization, makes image generation deterministic; requires PyTorch 2.*
	 * @default false
	 */
	opt_sdp_no_mem_attention?: boolean
	/**
	 * Disable Opt Split Attention
	 * prefer no cross-attention layer optimization for automatic choice of optimization
	 * @default false
	 */
	disable_opt_split_attention?: boolean
	/**
	 * Disable Nan Check
	 * do not check if produced images/latent spaces have nans; useful for running without a checkpoint in CI
	 * @default false
	 */
	disable_nan_check?: boolean
	/**
	 * Use Cpu
	 * use CPU as torch device for specified modules
	 * @default []
	 */
	use_cpu?: any[]
	/**
	 * Disable Model Loading Ram Optimization
	 * disable an optimization that reduces RAM use when loading a model
	 * @default false
	 */
	disable_model_loading_ram_optimization?: boolean
	/**
	 * Listen
	 * launch gradio with 0.0.0.0 as server name, allowing to respond to network requests
	 * @default false
	 */
	listen?: boolean
	/**
	 * Port
	 * launch gradio with given server port, you need root/admin rights for ports < 1024, defaults to 7860 if available
	 */
	port?: string
	/**
	 * Show Negative Prompt
	 * does not do anything
	 * @default false
	 */
	show_negative_prompt?: boolean
	/**
	 * Ui Config File
	 * filename to use for ui configuration
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\ui-config.json"
	 */
	ui_config_file?: string
	/**
	 * Hide Ui Dir Config
	 * hide directory configuration from webui
	 * @default false
	 */
	hide_ui_dir_config?: boolean
	/**
	 * Freeze Settings
	 * disable editing settings
	 * @default false
	 */
	freeze_settings?: boolean
	/**
	 * Ui Settings File
	 * filename to use for ui settings
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\config.json"
	 */
	ui_settings_file?: string
	/**
	 * Gradio Debug
	 * launch gradio with --debug option
	 * @default false
	 */
	gradio_debug?: boolean
	/**
	 * Gradio Auth
	 * set gradio authentication like "username:password"; or comma-delimit multiple like "u1:p1,u2:p2,u3:p3"
	 */
	gradio_auth?: string
	/**
	 * Gradio Auth Path
	 * set gradio authentication file path ex. "/path/to/auth/file" same auth format as --gradio-auth
	 */
	gradio_auth_path?: string
	/**
	 * Gradio Img2Img Tool
	 * does not do anything
	 */
	gradio_img2img_tool?: string
	/**
	 * Gradio Inpaint Tool
	 * does not do anything
	 */
	gradio_inpaint_tool?: string
	/**
	 * Gradio Allowed Path
	 * add path to gradio's allowed_paths, make it possible to serve files from it
	 * @default ["C:\\Users\\issd\\Desktop\\stable-diffusion-webui"]
	 */
	gradio_allowed_path?: any[]
	/**
	 * Opt Channelslast
	 * change memory type for stable diffusion to channels last
	 * @default false
	 */
	opt_channelslast?: boolean
	/**
	 * Styles File
	 * filename to use for styles
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\styles.csv"
	 */
	styles_file?: string
	/**
	 * Autolaunch
	 * open the webui URL in the system's default browser upon launch
	 * @default false
	 */
	autolaunch?: boolean
	/**
	 * Theme
	 * launches the UI with light or dark theme
	 */
	theme?: string
	/**
	 * Use Textbox Seed
	 * use textbox for seeds in UI (no up/down, but possible to input long seeds)
	 * @default false
	 */
	use_textbox_seed?: boolean
	/**
	 * Disable Console Progressbars
	 * do not output progressbars to console
	 * @default false
	 */
	disable_console_progressbars?: boolean
	/**
	 * Enable Console Prompts
	 * print prompts to console when generating with txt2img and img2img
	 * @default false
	 */
	enable_console_prompts?: boolean
	/**
	 * Vae Path
	 * Checkpoint to use as VAE; setting this argument disables all settings related to VAE
	 */
	vae_path?: string
	/**
	 * Disable Safe Unpickle
	 * disable checking pytorch models for malicious code
	 * @default false
	 */
	disable_safe_unpickle?: boolean
	/**
	 * Api
	 * use api=True to launch the API together with the webui (use --nowebui instead for only the API)
	 * @default false
	 */
	api?: boolean
	/**
	 * Api Auth
	 * Set authentication for API like "username:password"; or comma-delimit multiple like "u1:p1,u2:p2,u3:p3"
	 */
	api_auth?: string
	/**
	 * Api Log
	 * use api-log=True to enable logging of all API requests
	 * @default false
	 */
	api_log?: boolean
	/**
	 * Nowebui
	 * use api=True to launch the API instead of the webui
	 * @default false
	 */
	nowebui?: boolean
	/**
	 * Ui Debug Mode
	 * Don't load model to quickly launch UI
	 * @default false
	 */
	ui_debug_mode?: boolean
	/**
	 * Device Id
	 * Select the default CUDA device to use (export CUDA_VISIBLE_DEVICES=0,1,etc might be needed before)
	 */
	device_id?: string
	/**
	 * Administrator
	 * Administrator rights
	 * @default false
	 */
	administrator?: boolean
	/**
	 * Cors Allow Origins
	 * Allowed CORS origin(s) in the form of a comma-separated list (no spaces)
	 */
	cors_allow_origins?: string
	/**
	 * Cors Allow Origins Regex
	 * Allowed CORS origin(s) in the form of a single regular expression
	 */
	cors_allow_origins_regex?: string
	/**
	 * Tls Keyfile
	 * Partially enables TLS, requires --tls-certfile to fully function
	 */
	tls_keyfile?: string
	/**
	 * Tls Certfile
	 * Partially enables TLS, requires --tls-keyfile to fully function
	 */
	tls_certfile?: string
	/**
	 * Disable Tls Verify
	 * When passed, enables the use of self-signed certificates.
	 */
	disable_tls_verify?: string
	/**
	 * Server Name
	 * Sets hostname of server
	 */
	server_name?: string
	/**
	 * Gradio Queue
	 * does not do anything
	 * @default true
	 */
	gradio_queue?: boolean
	/**
	 * No Gradio Queue
	 * Disables gradio queue; causes the webpage to use http requests instead of websockets; was the defaul in earlier versions
	 * @default false
	 */
	no_gradio_queue?: boolean
	/**
	 * Skip Version Check
	 * Do not check versions of torch and xformers
	 * @default false
	 */
	skip_version_check?: boolean
	/**
	 * No Hashing
	 * disable sha256 hashing of checkpoints to help loading performance
	 * @default false
	 */
	no_hashing?: boolean
	/**
	 * No Download Sd Model
	 * don't download SD1.5 model even if no model is found in --ckpt-dir
	 * @default false
	 */
	no_download_sd_model?: boolean
	/**
	 * Subpath
	 * customize the subpath for gradio, use with reverse proxy
	 */
	subpath?: string
	/**
	 * Add Stop Route
	 * add /_stop route to stop server
	 * @default false
	 */
	add_stop_route?: boolean
	/**
	 * Api Server Stop
	 * enable server stop/restart/kill via api
	 * @default false
	 */
	api_server_stop?: boolean
	/**
	 * Timeout Keep Alive
	 * set timeout_keep_alive for uvicorn
	 * @default 30
	 */
	timeout_keep_alive?: number
	/**
	 * Disable All Extensions
	 * prevent all extensions from running regardless of any other settings
	 * @default false
	 */
	disable_all_extensions?: boolean
	/**
	 * Disable Extra Extensions
	 *  prevent all extensions except built-in from running regardless of any other settings
	 * @default false
	 */
	disable_extra_extensions?: boolean
	/**
	 * Ldsr Models Path
	 * Path to directory with LDSR model file(s).
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\models\LDSR"
	 */
	ldsr_models_path?: string
	/**
	 * Lora Dir
	 * Path to directory with Lora networks.
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\models\Lora"
	 */
	lora_dir?: string
	/**
	 * Lyco Dir Backcompat
	 * Path to directory with LyCORIS networks (for backawards compatibility; can also use --lyco-dir).
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\models\LyCORIS"
	 */
	lyco_dir_backcompat?: string
	/**
	 * Scunet Models Path
	 * Path to directory with ScuNET model file(s).
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\models\ScuNET"
	 */
	scunet_models_path?: string
	/**
	 * Swinir Models Path
	 * Path to directory with SwinIR model file(s).
	 * @default "C:\Users\issd\Desktop\stable-diffusion-webui\models\SwinIR"
	 */
	swinir_models_path?: string
}

/** HTTPValidationError */
export interface HTTPValidationError {
	/** Detail */
	detail?: ValidationError[]
}

/** HypernetworkItem */
export interface HypernetworkItem {
	/** Name */
	name: string
	/** Path */
	path?: string
}

/** ImageToImageResponse */
export interface ImageToImageResponse {
	/**
	 * Image
	 * The generated image in base64 format.
	 */
	images?: string[]
	/** Parameters */
	parameters: object
	/** Info */
	info: string
}

/** InterrogateRequest */
export interface InterrogateRequest {
	/**
	 * Image
	 * Image to work on, must be a Base64 string containing the image's data.
	 * @default ""
	 */
	image?: string
	/**
	 * Model
	 * The interrogate model used.
	 * @default "clip"
	 */
	model?: string
}

/** LatentUpscalerModeItem */
export interface LatentUpscalerModeItem {
	/** Name */
	name: string
}

/** MemoryResponse */
export interface MemoryResponse {
	/**
	 * RAM
	 * System memory stats
	 */
	ram: object
	/**
	 * CUDA
	 * nVidia CUDA memory stats
	 */
	cuda: object
}

/** Options */
export interface Options {
	/**
	 * Samples Save
	 * Always save all generated images
	 * @default true
	 */
	samples_save?: boolean
	/**
	 * Samples Format
	 * File format for images
	 * @default "png"
	 */
	samples_format?: string
	/**
	 * Samples Filename Pattern
	 * Images filename pattern
	 * @default ""
	 */
	samples_filename_pattern?: any
	/**
	 * Save Images Add Number
	 * Add number to filename when saving
	 * @default true
	 */
	save_images_add_number?: boolean
	/**
	 * Grid Save
	 * Always save all generated image grids
	 * @default true
	 */
	grid_save?: boolean
	/**
	 * Grid Format
	 * File format for grids
	 * @default "png"
	 */
	grid_format?: string
	/**
	 * Grid Extended Filename
	 * Add extended info (seed, prompt) to filename when saving grid
	 * @default false
	 */
	grid_extended_filename?: any
	/**
	 * Grid Only If Multiple
	 * Do not save grids consisting of one picture
	 * @default true
	 */
	grid_only_if_multiple?: boolean
	/**
	 * Grid Prevent Empty Spots
	 * Prevent empty spots in grid (when set to autodetect)
	 * @default false
	 */
	grid_prevent_empty_spots?: any
	/**
	 * Grid Zip Filename Pattern
	 * Archive filename pattern
	 * @default ""
	 */
	grid_zip_filename_pattern?: any
	/**
	 * N Rows
	 * Grid row count; use -1 for autodetect and 0 for it to be same as batch size
	 * @default -1
	 */
	n_rows?: number
	/**
	 * Font
	 * Font for image grids that have text
	 * @default ""
	 */
	font?: any
	/**
	 * Grid Text Active Color
	 * Text color for image grids
	 * @default "#000000"
	 */
	grid_text_active_color?: string
	/**
	 * Grid Text Inactive Color
	 * Inactive text color for image grids
	 * @default "#999999"
	 */
	grid_text_inactive_color?: string
	/**
	 * Grid Background Color
	 * Background color for image grids
	 * @default "#ffffff"
	 */
	grid_background_color?: string
	/**
	 * Enable Pnginfo
	 * Save text information about generation parameters as chunks to png files
	 * @default true
	 */
	enable_pnginfo?: boolean
	/**
	 * Save Txt
	 * Create a text file next to every image with generation parameters.
	 * @default false
	 */
	save_txt?: any
	/**
	 * Save Images Before Face Restoration
	 * Save a copy of image before doing face restoration.
	 * @default false
	 */
	save_images_before_face_restoration?: any
	/**
	 * Save Images Before Highres Fix
	 * Save a copy of image before applying highres fix.
	 * @default false
	 */
	save_images_before_highres_fix?: any
	/**
	 * Save Images Before Color Correction
	 * Save a copy of image before applying color correction to img2img results
	 * @default false
	 */
	save_images_before_color_correction?: any
	/**
	 * Save Mask
	 * For inpainting, save a copy of the greyscale mask
	 * @default false
	 */
	save_mask?: any
	/**
	 * Save Mask Composite
	 * For inpainting, save a masked composite
	 * @default false
	 */
	save_mask_composite?: any
	/**
	 * Jpeg Quality
	 * Quality for saved jpeg images
	 * @default 80
	 */
	jpeg_quality?: number
	/**
	 * Webp Lossless
	 * Use lossless compression for webp images
	 * @default false
	 */
	webp_lossless?: any
	/**
	 * Export For 4Chan
	 * Save copy of large images as JPG
	 * @default true
	 */
	export_for_4chan?: boolean
	/**
	 * Img Downscale Threshold
	 * File size limit for the above option, MB
	 * @default 4
	 */
	img_downscale_threshold?: number
	/**
	 * Target Side Length
	 * Width/height limit for the above option, in pixels
	 * @default 4000
	 */
	target_side_length?: number
	/**
	 * Img Max Size Mp
	 * Maximum image size
	 * @default 200
	 */
	img_max_size_mp?: number
	/**
	 * Use Original Name Batch
	 * Use original name for output filename during batch process in extras tab
	 * @default true
	 */
	use_original_name_batch?: boolean
	/**
	 * Use Upscaler Name As Suffix
	 * Use upscaler name as filename suffix in the extras tab
	 * @default false
	 */
	use_upscaler_name_as_suffix?: any
	/**
	 * Save Selected Only
	 * When using 'Save' button, only save a single selected image
	 * @default true
	 */
	save_selected_only?: boolean
	/**
	 * Save Init Img
	 * Save init images when using img2img
	 * @default false
	 */
	save_init_img?: any
	/**
	 * Temp Dir
	 * Directory for temporary images; leave empty for default
	 * @default ""
	 */
	temp_dir?: any
	/**
	 * Clean Temp Dir At Start
	 * Cleanup non-default temporary directory when starting webui
	 * @default false
	 */
	clean_temp_dir_at_start?: any
	/**
	 * Save Incomplete Images
	 * Save incomplete images
	 * @default false
	 */
	save_incomplete_images?: any
	/**
	 * Outdir Samples
	 * Output directory for images; if empty, defaults to three directories below
	 * @default ""
	 */
	outdir_samples?: any
	/**
	 * Outdir Txt2Img Samples
	 * Output directory for txt2img images
	 * @default "outputs/txt2img-images"
	 */
	outdir_txt2img_samples?: string
	/**
	 * Outdir Img2Img Samples
	 * Output directory for img2img images
	 * @default "outputs/img2img-images"
	 */
	outdir_img2img_samples?: string
	/**
	 * Outdir Extras Samples
	 * Output directory for images from extras tab
	 * @default "outputs/extras-images"
	 */
	outdir_extras_samples?: string
	/**
	 * Outdir Grids
	 * Output directory for grids; if empty, defaults to two directories below
	 * @default ""
	 */
	outdir_grids?: any
	/**
	 * Outdir Txt2Img Grids
	 * Output directory for txt2img grids
	 * @default "outputs/txt2img-grids"
	 */
	outdir_txt2img_grids?: string
	/**
	 * Outdir Img2Img Grids
	 * Output directory for img2img grids
	 * @default "outputs/img2img-grids"
	 */
	outdir_img2img_grids?: string
	/**
	 * Outdir Save
	 * Directory for saving images using the Save button
	 * @default "log/images"
	 */
	outdir_save?: string
	/**
	 * Outdir Init Images
	 * Directory for saving init images when using img2img
	 * @default "outputs/init-images"
	 */
	outdir_init_images?: string
	/**
	 * Save To Dirs
	 * Save images to a subdirectory
	 * @default true
	 */
	save_to_dirs?: boolean
	/**
	 * Grid Save To Dirs
	 * Save grids to a subdirectory
	 * @default true
	 */
	grid_save_to_dirs?: boolean
	/**
	 * Use Save To Dirs For Ui
	 * When using "Save" button, save images to a subdirectory
	 * @default false
	 */
	use_save_to_dirs_for_ui?: any
	/**
	 * Directories Filename Pattern
	 * Directory name pattern
	 * @default "[date]"
	 */
	directories_filename_pattern?: string
	/**
	 * Directories Max Prompt Words
	 * Max prompt words for [prompt_words] pattern
	 * @default 8
	 */
	directories_max_prompt_words?: number
	/**
	 * Esrgan Tile
	 * Tile size for ESRGAN upscalers.
	 * @default 192
	 */
	ESRGAN_tile?: number
	/**
	 * Esrgan Tile Overlap
	 * Tile overlap for ESRGAN upscalers.
	 * @default 8
	 */
	ESRGAN_tile_overlap?: number
	/**
	 * Realesrgan Enabled Models
	 * Select which Real-ESRGAN models to show in the web UI.
	 * @default ["R-ESRGAN 4x+","R-ESRGAN 4x+ Anime6B"]
	 */
	realesrgan_enabled_models?: any[]
	/**
	 * Upscaler For Img2Img
	 * Upscaler for img2img
	 */
	upscaler_for_img2img?: any
	/**
	 * Face Restoration
	 * Restore faces
	 * @default false
	 */
	face_restoration?: any
	/**
	 * Face Restoration Model
	 * Face restoration model
	 * @default "CodeFormer"
	 */
	face_restoration_model?: string
	/**
	 * Code Former Weight
	 * CodeFormer weight
	 * @default 0.5
	 */
	code_former_weight?: number
	/**
	 * Face Restoration Unload
	 * Move face restoration model from VRAM into RAM after processing
	 * @default false
	 */
	face_restoration_unload?: any
	/**
	 * Auto Launch Browser
	 * Automatically open webui in browser on startup
	 * @default "Local"
	 */
	auto_launch_browser?: string
	/**
	 * Show Warnings
	 * Show warnings in console.
	 * @default false
	 */
	show_warnings?: any
	/**
	 * Show Gradio Deprecation Warnings
	 * Show gradio deprecation warnings in console.
	 * @default true
	 */
	show_gradio_deprecation_warnings?: boolean
	/**
	 * Memmon Poll Rate
	 * VRAM usage polls per second during generation.
	 * @default 8
	 */
	memmon_poll_rate?: number
	/**
	 * Samples Log Stdout
	 * Always print all generation info to standard output
	 * @default false
	 */
	samples_log_stdout?: any
	/**
	 * Multiple Tqdm
	 * Add a second progress bar to the console that shows progress for an entire job.
	 * @default true
	 */
	multiple_tqdm?: boolean
	/**
	 * Print Hypernet Extra
	 * Print extra hypernetwork information to console.
	 * @default false
	 */
	print_hypernet_extra?: any
	/**
	 * List Hidden Files
	 * Load models/files in hidden directories
	 * @default true
	 */
	list_hidden_files?: boolean
	/**
	 * Disable Mmap Load Safetensors
	 * Disable memmapping for loading .safetensors files.
	 * @default false
	 */
	disable_mmap_load_safetensors?: any
	/**
	 * Hide Ldm Prints
	 * Prevent Stability-AI's ldm/sgm modules from printing noise to console.
	 * @default true
	 */
	hide_ldm_prints?: boolean
	/**
	 * Api Enable Requests
	 * Allow http:// and https:// URLs for input images in API
	 * @default true
	 */
	api_enable_requests?: boolean
	/**
	 * Api Forbid Local Requests
	 * Forbid URLs to local resources
	 * @default true
	 */
	api_forbid_local_requests?: boolean
	/**
	 * Api Useragent
	 * User agent for requests
	 * @default ""
	 */
	api_useragent?: any
	/**
	 * Unload Models When Training
	 * Move VAE and CLIP to RAM when training if possible. Saves VRAM.
	 * @default false
	 */
	unload_models_when_training?: any
	/**
	 * Pin Memory
	 * Turn on pin_memory for DataLoader. Makes training slightly faster but can increase memory usage.
	 * @default false
	 */
	pin_memory?: any
	/**
	 * Save Optimizer State
	 * Saves Optimizer state as separate *.optim file. Training of embedding or HN can be resumed with the matching optim file.
	 * @default false
	 */
	save_optimizer_state?: any
	/**
	 * Save Training Settings To Txt
	 * Save textual inversion and hypernet settings to a text file whenever training starts.
	 * @default true
	 */
	save_training_settings_to_txt?: boolean
	/**
	 * Dataset Filename Word Regex
	 * Filename word regex
	 * @default ""
	 */
	dataset_filename_word_regex?: any
	/**
	 * Dataset Filename Join String
	 * Filename join string
	 * @default " "
	 */
	dataset_filename_join_string?: string
	/**
	 * Training Image Repeats Per Epoch
	 * Number of repeats for a single input image per epoch; used only for displaying epoch number
	 * @default 1
	 */
	training_image_repeats_per_epoch?: number
	/**
	 * Training Write Csv Every
	 * Save an csv containing the loss to log directory every N steps, 0 to disable
	 * @default 500
	 */
	training_write_csv_every?: number
	/**
	 * Training Xattention Optimizations
	 * Use cross attention optimizations while training
	 * @default false
	 */
	training_xattention_optimizations?: any
	/**
	 * Training Enable Tensorboard
	 * Enable tensorboard logging.
	 * @default false
	 */
	training_enable_tensorboard?: any
	/**
	 * Training Tensorboard Save Images
	 * Save generated images within tensorboard.
	 * @default false
	 */
	training_tensorboard_save_images?: any
	/**
	 * Training Tensorboard Flush Every
	 * How often, in seconds, to flush the pending tensorboard events and summaries to disk.
	 * @default 120
	 */
	training_tensorboard_flush_every?: number
	/**
	 * Sd Model Checkpoint
	 * Stable Diffusion checkpoint
	 */
	sd_model_checkpoint?: any
	/**
	 * Sd Checkpoints Limit
	 * Maximum number of checkpoints loaded at the same time
	 * @default 1
	 */
	sd_checkpoints_limit?: number
	/**
	 * Sd Checkpoints Keep In Cpu
	 * Only keep one model on device
	 * @default true
	 */
	sd_checkpoints_keep_in_cpu?: boolean
	/**
	 * Sd Checkpoint Cache
	 * Checkpoints to cache in RAM
	 * @default 0
	 */
	sd_checkpoint_cache?: any
	/**
	 * Sd Unet
	 * SD Unet
	 * @default "Automatic"
	 */
	sd_unet?: string
	/**
	 * Enable Quantization
	 * Enable quantization in K samplers for sharper and cleaner results. This may change existing seeds
	 * @default false
	 */
	enable_quantization?: any
	/**
	 * Enable Emphasis
	 * Enable emphasis
	 * @default true
	 */
	enable_emphasis?: boolean
	/**
	 * Enable Batch Seeds
	 * Make K-diffusion samplers produce same images in a batch as when making a single image
	 * @default true
	 */
	enable_batch_seeds?: boolean
	/**
	 * Comma Padding Backtrack
	 * Prompt word wrap length limit
	 * @default 20
	 */
	comma_padding_backtrack?: number
	/**
	 * Clip Stop At Last Layers
	 * Clip skip
	 * @default 1
	 */
	CLIP_stop_at_last_layers?: number
	/**
	 * Upcast Attn
	 * Upcast cross attention layer to float32
	 * @default false
	 */
	upcast_attn?: any
	/**
	 * Randn Source
	 * Random number generator source.
	 * @default "GPU"
	 */
	randn_source?: string
	/**
	 * Tiling
	 * Tiling
	 * @default false
	 */
	tiling?: any
	/**
	 * Hires Fix Refiner Pass
	 * Hires fix: which pass to enable refiner for
	 * @default "second pass"
	 */
	hires_fix_refiner_pass?: string
	/**
	 * Sdxl Crop Top
	 * crop top coordinate
	 * @default 0
	 */
	sdxl_crop_top?: any
	/**
	 * Sdxl Crop Left
	 * crop left coordinate
	 * @default 0
	 */
	sdxl_crop_left?: any
	/**
	 * Sdxl Refiner Low Aesthetic Score
	 * SDXL low aesthetic score
	 * @default 2.5
	 */
	sdxl_refiner_low_aesthetic_score?: number
	/**
	 * Sdxl Refiner High Aesthetic Score
	 * SDXL high aesthetic score
	 * @default 6
	 */
	sdxl_refiner_high_aesthetic_score?: number
	/**
	 * Sd Vae Explanation
	 * @default "<abbr title='Variational autoencoder'>VAE</abbr> is a neural network that transforms a standard <abbr title='red/green/blue'>RGB</abbr>
	 * image into latent space representation and back. Latent space representation is what stable diffusion is working on during sampling
	 * (i.e. when the progress bar is between empty and full). For txt2img, VAE is used to create a resulting image after the sampling is finished.
	 * For img2img, VAE is used to process user's input image before the sampling, and to create an image after sampling."
	 */
	sd_vae_explanation?: string
	/**
	 * Sd Vae Checkpoint Cache
	 * VAE Checkpoints to cache in RAM
	 * @default 0
	 */
	sd_vae_checkpoint_cache?: any
	/**
	 * Sd Vae
	 * SD VAE
	 * @default "Automatic"
	 */
	sd_vae?: string
	/**
	 * Sd Vae Overrides Per Model Preferences
	 * Selected VAE overrides per-model preferences
	 * @default true
	 */
	sd_vae_overrides_per_model_preferences?: boolean
	/**
	 * Auto Vae Precision
	 * Automatically revert VAE to 32-bit floats
	 * @default true
	 */
	auto_vae_precision?: boolean
	/**
	 * Sd Vae Encode Method
	 * VAE type for encode
	 * @default "Full"
	 */
	sd_vae_encode_method?: string
	/**
	 * Sd Vae Decode Method
	 * VAE type for decode
	 * @default "Full"
	 */
	sd_vae_decode_method?: string
	/**
	 * Inpainting Mask Weight
	 * Inpainting conditioning mask strength
	 * @default 1
	 */
	inpainting_mask_weight?: number
	/**
	 * Initial Noise Multiplier
	 * Noise multiplier for img2img
	 * @default 1
	 */
	initial_noise_multiplier?: number
	/**
	 * Img2Img Extra Noise
	 * Extra noise multiplier for img2img and hires fix
	 * @default 0
	 */
	img2img_extra_noise?: any
	/**
	 * Img2Img Color Correction
	 * Apply color correction to img2img results to match original colors.
	 * @default false
	 */
	img2img_color_correction?: any
	/**
	 * Img2Img Fix Steps
	 * With img2img, do exactly the amount of steps the slider specifies.
	 * @default false
	 */
	img2img_fix_steps?: any
	/**
	 * Img2Img Background Color
	 * With img2img, fill transparent parts of the input image with this color.
	 * @default "#ffffff"
	 */
	img2img_background_color?: string
	/**
	 * Img2Img Editor Height
	 * Height of the image editor
	 * @default 720
	 */
	img2img_editor_height?: number
	/**
	 * Img2Img Sketch Default Brush Color
	 * Sketch initial brush color
	 * @default "#ffffff"
	 */
	img2img_sketch_default_brush_color?: string
	/**
	 * Img2Img Inpaint Mask Brush Color
	 * Inpaint mask brush color
	 * @default "#ffffff"
	 */
	img2img_inpaint_mask_brush_color?: string
	/**
	 * Img2Img Inpaint Sketch Default Brush Color
	 * Inpaint sketch initial brush color
	 * @default "#ffffff"
	 */
	img2img_inpaint_sketch_default_brush_color?: string
	/**
	 * Return Mask
	 * For inpainting, include the greyscale mask in results for web
	 * @default false
	 */
	return_mask?: any
	/**
	 * Return Mask Composite
	 * For inpainting, include masked composite in results for web
	 * @default false
	 */
	return_mask_composite?: any
	/**
	 * Cross Attention Optimization
	 * Cross attention optimization
	 * @default "Automatic"
	 */
	cross_attention_optimization?: string
	/**
	 * S Min Uncond
	 * Negative Guidance minimum sigma
	 * @default 0
	 */
	s_min_uncond?: any
	/**
	 * Token Merging Ratio
	 * Token merging ratio
	 * @default 0
	 */
	token_merging_ratio?: any
	/**
	 * Token Merging Ratio Img2Img
	 * Token merging ratio for img2img
	 * @default 0
	 */
	token_merging_ratio_img2img?: any
	/**
	 * Token Merging Ratio Hr
	 * Token merging ratio for high-res pass
	 * @default 0
	 */
	token_merging_ratio_hr?: any
	/**
	 * Pad Cond Uncond
	 * Pad prompt/negative prompt to be same length
	 * @default false
	 */
	pad_cond_uncond?: any
	/**
	 * Persistent Cond Cache
	 * Persistent cond cache
	 * @default true
	 */
	persistent_cond_cache?: boolean
	/**
	 * Batch Cond Uncond
	 * Batch cond/uncond
	 * @default true
	 */
	batch_cond_uncond?: boolean
	/**
	 * Use Old Emphasis Implementation
	 * Use old emphasis implementation. Can be useful to reproduce old seeds.
	 * @default false
	 */
	use_old_emphasis_implementation?: any
	/**
	 * Use Old Karras Scheduler Sigmas
	 * Use old karras scheduler sigmas (0.1 to 10).
	 * @default false
	 */
	use_old_karras_scheduler_sigmas?: any
	/**
	 * No Dpmpp Sde Batch Determinism
	 * Do not make DPM++ SDE deterministic across different batch sizes.
	 * @default false
	 */
	no_dpmpp_sde_batch_determinism?: any
	/**
	 * Use Old Hires Fix Width Height
	 * For hires fix, use width/height sliders to set final resolution rather than first pass (disables Upscale by, Resize width/height to).
	 * @default false
	 */
	use_old_hires_fix_width_height?: any
	/**
	 * Dont Fix Second Order Samplers Schedule
	 * Do not fix prompt schedule for second order samplers.
	 * @default false
	 */
	dont_fix_second_order_samplers_schedule?: any
	/**
	 * Hires Fix Use Firstpass Conds
	 * For hires fix, calculate conds of second pass using extra networks of first pass.
	 * @default false
	 */
	hires_fix_use_firstpass_conds?: any
	/**
	 * Use Old Scheduling
	 * Use old prompt editing timelines.
	 * @default false
	 */
	use_old_scheduling?: any
	/**
	 * Interrogate Keep Models In Memory
	 * Keep models in VRAM
	 * @default false
	 */
	interrogate_keep_models_in_memory?: any
	/**
	 * Interrogate Return Ranks
	 * Include ranks of model tags matches in results.
	 * @default false
	 */
	interrogate_return_ranks?: any
	/**
	 * Interrogate Clip Num Beams
	 * BLIP: num_beams
	 * @default 1
	 */
	interrogate_clip_num_beams?: number
	/**
	 * Interrogate Clip Min Length
	 * BLIP: minimum description length
	 * @default 24
	 */
	interrogate_clip_min_length?: number
	/**
	 * Interrogate Clip Max Length
	 * BLIP: maximum description length
	 * @default 48
	 */
	interrogate_clip_max_length?: number
	/**
	 * Interrogate Clip Dict Limit
	 * CLIP: maximum number of lines in text file
	 * @default 1500
	 */
	interrogate_clip_dict_limit?: number
	/**
	 * Interrogate Clip Skip Categories
	 * CLIP: skip inquire categories
	 * @default []
	 */
	interrogate_clip_skip_categories?: any
	/**
	 * Interrogate Deepbooru Score Threshold
	 * deepbooru: score threshold
	 * @default 0.5
	 */
	interrogate_deepbooru_score_threshold?: number
	/**
	 * Deepbooru Sort Alpha
	 * deepbooru: sort tags alphabetically
	 * @default true
	 */
	deepbooru_sort_alpha?: boolean
	/**
	 * Deepbooru Use Spaces
	 * deepbooru: use spaces in tags
	 * @default true
	 */
	deepbooru_use_spaces?: boolean
	/**
	 * Deepbooru Escape
	 * deepbooru: escape (\) brackets
	 * @default true
	 */
	deepbooru_escape?: boolean
	/**
	 * Deepbooru Filter Tags
	 * deepbooru: filter out those tags
	 * @default ""
	 */
	deepbooru_filter_tags?: any
	/**
	 * Extra Networks Show Hidden Directories
	 * Show hidden directories
	 * @default true
	 */
	extra_networks_show_hidden_directories?: boolean
	/**
	 * Extra Networks Hidden Models
	 * Show cards for models in hidden directories
	 * @default "When searched"
	 */
	extra_networks_hidden_models?: string
	/**
	 * Extra Networks Default Multiplier
	 * Default multiplier for extra networks
	 * @default 1
	 */
	extra_networks_default_multiplier?: number
	/**
	 * Extra Networks Card Width
	 * Card width for Extra Networks
	 * @default 0
	 */
	extra_networks_card_width?: any
	/**
	 * Extra Networks Card Height
	 * Card height for Extra Networks
	 * @default 0
	 */
	extra_networks_card_height?: any
	/**
	 * Extra Networks Card Text Scale
	 * Card text scale
	 * @default 1
	 */
	extra_networks_card_text_scale?: number
	/**
	 * Extra Networks Card Show Desc
	 * Show description on card
	 * @default true
	 */
	extra_networks_card_show_desc?: boolean
	/**
	 * Extra Networks Add Text Separator
	 * Extra networks separator
	 * @default " "
	 */
	extra_networks_add_text_separator?: string
	/**
	 * Ui Extra Networks Tab Reorder
	 * Extra networks tab order
	 * @default ""
	 */
	ui_extra_networks_tab_reorder?: any
	/**
	 * Textual Inversion Print At Load
	 * Print a list of Textual Inversion embeddings when loading model
	 * @default false
	 */
	textual_inversion_print_at_load?: any
	/**
	 * Textual Inversion Add Hashes To Infotext
	 * Add Textual Inversion hashes to infotext
	 * @default true
	 */
	textual_inversion_add_hashes_to_infotext?: boolean
	/**
	 * Sd Hypernetwork
	 * Add hypernetwork to prompt
	 * @default "None"
	 */
	sd_hypernetwork?: string
	/**
	 * Localization
	 * Localization
	 * @default "None"
	 */
	localization?: string
	/**
	 * Gradio Theme
	 * Gradio theme
	 * @default "Default"
	 */
	gradio_theme?: string
	/**
	 * Gradio Themes Cache
	 * Cache gradio themes locally
	 * @default true
	 */
	gradio_themes_cache?: boolean
	/**
	 * Gallery Height
	 * Gallery height
	 * @default ""
	 */
	gallery_height?: any
	/**
	 * Return Grid
	 * Show grid in results for web
	 * @default true
	 */
	return_grid?: boolean
	/**
	 * Do Not Show Images
	 * Do not show any images in results for web
	 * @default false
	 */
	do_not_show_images?: any
	/**
	 * Send Seed
	 * Send seed when sending prompt or image to other interface
	 * @default true
	 */
	send_seed?: boolean
	/**
	 * Send Size
	 * Send size when sending prompt or image to another interface
	 * @default true
	 */
	send_size?: boolean
	/**
	 * Js Modal Lightbox
	 * Enable full page image viewer
	 * @default true
	 */
	js_modal_lightbox?: boolean
	/**
	 * Js Modal Lightbox Initially Zoomed
	 * Show images zoomed in by default in full page image viewer
	 * @default true
	 */
	js_modal_lightbox_initially_zoomed?: boolean
	/**
	 * Js Modal Lightbox Gamepad
	 * Navigate image viewer with gamepad
	 * @default false
	 */
	js_modal_lightbox_gamepad?: any
	/**
	 * Js Modal Lightbox Gamepad Repeat
	 * Gamepad repeat period, in milliseconds
	 * @default 250
	 */
	js_modal_lightbox_gamepad_repeat?: number
	/**
	 * Show Progress In Title
	 * Show generation progress in window title.
	 * @default true
	 */
	show_progress_in_title?: boolean
	/**
	 * Samplers In Dropdown
	 * Use dropdown for sampler selection instead of radio group
	 * @default true
	 */
	samplers_in_dropdown?: boolean
	/**
	 * Dimensions And Batch Together
	 * Show Width/Height and Batch sliders in same row
	 * @default true
	 */
	dimensions_and_batch_together?: boolean
	/**
	 * Keyedit Precision Attention
	 * Ctrl+up/down precision when editing (attention:1.1)
	 * @default 0.1
	 */
	keyedit_precision_attention?: number
	/**
	 * Keyedit Precision Extra
	 * Ctrl+up/down precision when editing <extra networks:0.9>
	 * @default 0.05
	 */
	keyedit_precision_extra?: number
	/**
	 * Keyedit Delimiters
	 * Ctrl+up/down word delimiters
	 * @default ".,\/!?%^*;:{}=`~()"
	 */
	keyedit_delimiters?: string
	/**
	 * Keyedit Move
	 * Alt+left/right moves prompt elements
	 * @default true
	 */
	keyedit_move?: boolean
	/**
	 * Quicksettings List
	 * Quicksettings list
	 * @default ["sd_model_checkpoint"]
	 */
	quicksettings_list?: any[]
	/**
	 * Ui Tab Order
	 * UI tab order
	 * @default []
	 */
	ui_tab_order?: any
	/**
	 * Hidden Tabs
	 * Hidden UI tabs
	 * @default []
	 */
	hidden_tabs?: any
	/**
	 * Ui Reorder List
	 * txt2img/img2img UI item order
	 * @default []
	 */
	ui_reorder_list?: any
	/**
	 * Hires Fix Show Sampler
	 * Hires fix: show hires checkpoint and sampler selection
	 * @default false
	 */
	hires_fix_show_sampler?: any
	/**
	 * Hires Fix Show Prompts
	 * Hires fix: show hires prompt and negative prompt
	 * @default false
	 */
	hires_fix_show_prompts?: any
	/**
	 * Disable Token Counters
	 * Disable prompt token counters
	 * @default false
	 */
	disable_token_counters?: any
	/**
	 * Add Model Hash To Info
	 * Add model hash to generation information
	 * @default true
	 */
	add_model_hash_to_info?: boolean
	/**
	 * Add Model Name To Info
	 * Add model name to generation information
	 * @default true
	 */
	add_model_name_to_info?: boolean
	/**
	 * Add User Name To Info
	 * Add user name to generation information when authenticated
	 * @default false
	 */
	add_user_name_to_info?: any
	/**
	 * Add Version To Infotext
	 * Add program version to generation information
	 * @default true
	 */
	add_version_to_infotext?: boolean
	/**
	 * Disable Weights Auto Swap
	 * Disregard checkpoint information from pasted infotext
	 * @default true
	 */
	disable_weights_auto_swap?: boolean
	/**
	 * Infotext Styles
	 * Infer styles from prompts of pasted infotext
	 * @default "Apply if any"
	 */
	infotext_styles?: string
	/**
	 * Show Progressbar
	 * Show progressbar
	 * @default true
	 */
	show_progressbar?: boolean
	/**
	 * Live Previews Enable
	 * Show live previews of the created image
	 * @default true
	 */
	live_previews_enable?: boolean
	/**
	 * Live Previews Image Format
	 * Live preview file format
	 * @default "png"
	 */
	live_previews_image_format?: string
	/**
	 * Show Progress Grid
	 * Show previews of all images generated in a batch as a grid
	 * @default true
	 */
	show_progress_grid?: boolean
	/**
	 * Show Progress Every N Steps
	 * Live preview display period
	 * @default 10
	 */
	show_progress_every_n_steps?: number
	/**
	 * Show Progress Type
	 * Live preview method
	 * @default "Approx NN"
	 */
	show_progress_type?: string
	/**
	 * Live Preview Allow Lowvram Full
	 * Allow Full live preview method with lowvram/medvram
	 * @default false
	 */
	live_preview_allow_lowvram_full?: any
	/**
	 * Live Preview Content
	 * Live preview subject
	 * @default "Prompt"
	 */
	live_preview_content?: string
	/**
	 * Live Preview Refresh Period
	 * Progressbar and preview update period
	 * @default 1000
	 */
	live_preview_refresh_period?: number
	/**
	 * Live Preview Fast Interrupt
	 * Return image with chosen live preview method on interrupt
	 * @default false
	 */
	live_preview_fast_interrupt?: any
	/**
	 * Hide Samplers
	 * Hide samplers in user interface
	 * @default []
	 */
	hide_samplers?: any
	/**
	 * Eta Ddim
	 * Eta for DDIM
	 * @default 0
	 */
	eta_ddim?: any
	/**
	 * Eta Ancestral
	 * Eta for k-diffusion samplers
	 * @default 1
	 */
	eta_ancestral?: number
	/**
	 * Ddim Discretize
	 * img2img DDIM discretize
	 * @default "uniform"
	 */
	ddim_discretize?: string
	/**
	 * S Churn
	 * sigma churn
	 * @default 0
	 */
	s_churn?: any
	/**
	 * S Tmin
	 * sigma tmin
	 * @default 0
	 */
	s_tmin?: any
	/**
	 * S Tmax
	 * sigma tmax
	 * @default 0
	 */
	s_tmax?: any
	/**
	 * S Noise
	 * sigma noise
	 * @default 1
	 */
	s_noise?: number
	/**
	 * K Sched Type
	 * Scheduler type
	 * @default "Automatic"
	 */
	k_sched_type?: string
	/**
	 * Sigma Min
	 * sigma min
	 * @default 0
	 */
	sigma_min?: any
	/**
	 * Sigma Max
	 * sigma max
	 * @default 0
	 */
	sigma_max?: any
	/**
	 * Rho
	 * rho
	 * @default 0
	 */
	rho?: any
	/**
	 * Eta Noise Seed Delta
	 * Eta noise seed delta
	 * @default 0
	 */
	eta_noise_seed_delta?: any
	/**
	 * Always Discard Next To Last Sigma
	 * Always discard next-to-last sigma
	 * @default false
	 */
	always_discard_next_to_last_sigma?: any
	/**
	 * Sgm Noise Multiplier
	 * SGM noise multiplier
	 * @default false
	 */
	sgm_noise_multiplier?: any
	/**
	 * Uni Pc Variant
	 * UniPC variant
	 * @default "bh1"
	 */
	uni_pc_variant?: string
	/**
	 * Uni Pc Skip Type
	 * UniPC skip type
	 * @default "time_uniform"
	 */
	uni_pc_skip_type?: string
	/**
	 * Uni Pc Order
	 * UniPC order
	 * @default 3
	 */
	uni_pc_order?: number
	/**
	 * Uni Pc Lower Order Final
	 * UniPC lower order final
	 * @default true
	 */
	uni_pc_lower_order_final?: boolean
	/**
	 * Postprocessing Enable In Main Ui
	 * Enable postprocessing operations in txt2img and img2img tabs
	 * @default []
	 */
	postprocessing_enable_in_main_ui?: any
	/**
	 * Postprocessing Operation Order
	 * Postprocessing operation order
	 * @default []
	 */
	postprocessing_operation_order?: any
	/**
	 * Upscaling Max Images In Cache
	 * Maximum number of images in upscaling cache
	 * @default 5
	 */
	upscaling_max_images_in_cache?: number
	/**
	 * Disabled Extensions
	 * Disable these extensions
	 * @default []
	 */
	disabled_extensions?: any
	/**
	 * Disable All Extensions
	 * Disable all extensions (preserves the list of disabled extensions)
	 * @default "none"
	 */
	disable_all_extensions?: string
	/**
	 * Restore Config State File
	 * Config state file to restore from, under 'config-states/' folder
	 * @default ""
	 */
	restore_config_state_file?: any
	/**
	 * Sd Checkpoint Hash
	 * SHA256 hash of the current checkpoint
	 * @default ""
	 */
	sd_checkpoint_hash?: any
	/**
	 * Sd Lora
	 * Add network to prompt
	 * @default "None"
	 */
	sd_lora?: string
	/**
	 * Lora Preferred Name
	 * When adding to prompt, refer to Lora by
	 * @default "Alias from file"
	 */
	lora_preferred_name?: string
	/**
	 * Lora Add Hashes To Infotext
	 * Add Lora hashes to infotext
	 * @default true
	 */
	lora_add_hashes_to_infotext?: boolean
	/**
	 * Lora Show All
	 * Always show all networks on the Lora page
	 * @default false
	 */
	lora_show_all?: any
	/**
	 * Lora Hide Unknown For Versions
	 * Hide networks of unknown versions for model versions
	 * @default []
	 */
	lora_hide_unknown_for_versions?: any
	/**
	 * Lora In Memory Limit
	 * Number of Lora networks to keep cached in memory
	 * @default 0
	 */
	lora_in_memory_limit?: any
	/**
	 * Lora Functional
	 * Lora/Networks: use old method that takes longer when you have multiple Loras active and produces same results as kohya-ss/sd-webui-additional-networks extension
	 * @default false
	 */
	lora_functional?: any
	/**
	 * Canvas Hotkey Zoom
	 * Zoom canvas
	 * @default "Alt"
	 */
	canvas_hotkey_zoom?: string
	/**
	 * Canvas Hotkey Adjust
	 * Adjust brush size
	 * @default "Ctrl"
	 */
	canvas_hotkey_adjust?: string
	/**
	 * Canvas Hotkey Move
	 * Moving the canvas
	 * @default "F"
	 */
	canvas_hotkey_move?: string
	/**
	 * Canvas Hotkey Fullscreen
	 * Fullscreen Mode, maximizes the picture so that it fits into the screen and stretches it to its full width
	 * @default "S"
	 */
	canvas_hotkey_fullscreen?: string
	/**
	 * Canvas Hotkey Reset
	 * Reset zoom and canvas positon
	 * @default "R"
	 */
	canvas_hotkey_reset?: string
	/**
	 * Canvas Hotkey Overlap
	 * Toggle overlap
	 * @default "O"
	 */
	canvas_hotkey_overlap?: string
	/**
	 * Canvas Show Tooltip
	 * Enable tooltip on the canvas
	 * @default true
	 */
	canvas_show_tooltip?: boolean
	/**
	 * Canvas Auto Expand
	 * Automatically expands an image that does not fit completely in the canvas area, similar to manually pressing the S and R buttons
	 * @default true
	 */
	canvas_auto_expand?: boolean
	/**
	 * Canvas Blur Prompt
	 * Take the focus off the prompt when working with a canvas
	 * @default false
	 */
	canvas_blur_prompt?: any
	/**
	 * Canvas Disabled Functions
	 * Disable function that you don't use
	 * @default ["Overlap"]
	 */
	canvas_disabled_functions?: any[]
	/**
	 * Extra Options Txt2Img
	 * Options in main UI - txt2img
	 * @default []
	 */
	extra_options_txt2img?: any
	/**
	 * Extra Options Img2Img
	 * Options in main UI - img2img
	 * @default []
	 */
	extra_options_img2img?: any
	/**
	 * Extra Options Cols
	 * Options in main UI - number of columns
	 * @default 1
	 */
	extra_options_cols?: number
	/**
	 * Extra Options Accordion
	 * Options in main UI - place into an accordion
	 * @default false
	 */
	extra_options_accordion?: any
}

/** PNGInfoRequest */
export interface PNGInfoRequest {
	/**
	 * Image
	 * The base64 encoded PNG image
	 */
	image: string
}

/** PNGInfoResponse */
export interface PNGInfoResponse {
	/**
	 * Image info
	 * A string with the parameters used to generate the image
	 */
	info: string
	/**
	 * Items
	 * An object containing all the info the image had
	 */
	items: object
}

/** PredictBody */
export interface PredictBody {
	/** Session Hash */
	session_hash?: string
	/** Event Id */
	event_id?: string
	/** Data */
	data: any[]
	/** Event Data */
	event_data?: any
	/** Fn Index */
	fn_index?: number
	/**
	 * Batched
	 * @default false
	 */
	batched?: boolean
	/** Request */
	request?: object | object[] | (object & object[])
}

/** PreprocessResponse */
export interface PreprocessResponse {
	/**
	 * Preprocess info
	 * Response string from preprocessing task.
	 */
	info: string
}

/** ProgressRequest */
export interface ProgressRequest {
	/**
	 * Task ID
	 * id of the task to get progress for
	 */
	id_task?: string
	/**
	 * Live preview image ID
	 * id of last received last preview image
	 * @default -1
	 */
	id_live_preview?: number
	/**
	 * Include live preview
	 * boolean flag indicating whether to include the live preview image
	 * @default true
	 */
	live_preview?: boolean
}

/** PromptStyleItem */
export interface PromptStyleItem {
	/** Name */
	name: string
	/** Prompt */
	prompt?: string
	/** Negative Prompt */
	negative_prompt?: string
}

/** QuicksettingsHint */
export interface QuicksettingsHint {
	/** Name of the quicksettings field */
	name: string
	/** Label of the quicksettings field */
	label: string
}

/** RealesrganItem */
export interface RealesrganItem {
	/** Name */
	name: string
	/** Path */
	path?: string
	/** Scale */
	scale?: number
}

/** ResetBody */
export interface ResetBody {
	/** Session Hash */
	session_hash: string
	/** Fn Index */
	fn_index: number
}

/** SDModelItem */
export interface SDModelItem {
	/** Title */
	title: string
	/** Model Name */
	model_name: string
	/** Short hash */
	hash?: string
	/** sha256 hash */
	sha256?: string
	/** Filename */
	filename: string
	/** Config file */
	config?: string
}

/** SDVaeItem */
export interface SDVaeItem {
	/** Model Name */
	model_name: string
	/** Filename */
	filename: string
}

/** SamplerItem */
export interface SamplerItem {
	/** Name */
	name: string
	/** Aliases */
	aliases: string[]
	/** Options */
	options: Record<string, string>
}

/** ScriptArg */
export interface ScriptArg {
	/**
	 * Label
	 * Name of the argument in UI
	 */
	label?: string
	/**
	 * Value
	 * Default value of the argument
	 */
	value?: any
	/**
	 * Minimum
	 * Minimum allowed value for the argumentin UI
	 */
	minimum?: any
	/**
	 * Minimum
	 * Maximum allowed value for the argumentin UI
	 */
	maximum?: any
	/**
	 * Minimum
	 * Step for changing value of the argumentin UI
	 */
	step?: any
	/**
	 * Choices
	 * Possible values for the argument
	 */
	choices?: string[]
}

/** ScriptInfo */
export interface ScriptInfo {
	/**
	 * Name
	 * Script name
	 */
	name?: string
	/**
	 * IsAlwayson
	 * Flag specifying whether this script is an alwayson script
	 */
	is_alwayson?: boolean
	/**
	 * IsImg2img
	 * Flag specifying whether this script is an img2img script
	 */
	is_img2img?: boolean
	/**
	 * Arguments
	 * List of script's arguments
	 */
	args: ScriptArg[]
}

/** ScriptsList */
export interface ScriptsList {
	/**
	 * Txt2img
	 * Titles of scripts (txt2img)
	 */
	txt2img?: any[]
	/**
	 * Img2img
	 * Titles of scripts (img2img)
	 */
	img2img?: any[]
}

/** StableDiffusionProcessingImg2Img */
export interface StableDiffusionProcessingImg2Img {
	/**
	 * Prompt
	 * @default ""
	 */
	prompt?: string
	/**
	 * Negative Prompt
	 * @default ""
	 */
	negative_prompt?: string
	/** Styles */
	styles?: string[]
	/**
	 * Seed
	 * @default -1
	 */
	seed?: number
	/**
	 * Subseed
	 * @default -1
	 */
	subseed?: number
	/**
	 * Subseed Strength
	 * @default 0
	 */
	subseed_strength?: number
	/**
	 * Seed Resize From H
	 * @default -1
	 */
	seed_resize_from_h?: number
	/**
	 * Seed Resize From W
	 * @default -1
	 */
	seed_resize_from_w?: number
	/** Sampler Name */
	sampler_name?: string
	/**
	 * Batch Size
	 * @default 1
	 */
	batch_size?: number
	/**
	 * N Iter
	 * @default 1
	 */
	n_iter?: number
	/**
	 * Steps
	 * @default 50
	 */
	steps?: number
	/**
	 * Cfg Scale
	 * @default 7
	 */
	cfg_scale?: number
	/**
	 * Width
	 * @default 512
	 */
	width?: number
	/**
	 * Height
	 * @default 512
	 */
	height?: number
	/** Restore Faces */
	restore_faces?: boolean
	/** Tiling */
	tiling?: boolean
	/**
	 * Do Not Save Samples
	 * @default false
	 */
	do_not_save_samples?: boolean
	/**
	 * Do Not Save Grid
	 * @default false
	 */
	do_not_save_grid?: boolean
	/** Eta */
	eta?: number
	/**
	 * Denoising Strength
	 * @default 0.75
	 */
	denoising_strength?: number
	/** S Min Uncond */
	s_min_uncond?: number
	/** S Churn */
	s_churn?: number
	/** S Tmax */
	s_tmax?: number
	/** S Tmin */
	s_tmin?: number
	/** S Noise */
	s_noise?: number
	/** Override Settings */
	override_settings?: object
	/**
	 * Override Settings Restore Afterwards
	 * @default true
	 */
	override_settings_restore_afterwards?: boolean
	/** Refiner Checkpoint */
	refiner_checkpoint?: string
	/** Refiner Switch At */
	refiner_switch_at?: number
	/**
	 * Disable Extra Networks
	 * @default false
	 */
	disable_extra_networks?: boolean
	/** Comments */
	comments?: object
	/** Init Images */
	init_images?: any[]
	/**
	 * Resize Mode
	 * @default 0
	 */
	resize_mode?: number
	/** Image Cfg Scale */
	image_cfg_scale?: number
	/** Mask */
	mask?: string
	/**
	 * Mask Blur X
	 * @default 4
	 */
	mask_blur_x?: number
	/**
	 * Mask Blur Y
	 * @default 4
	 */
	mask_blur_y?: number
	/** Mask Blur */
	mask_blur?: number
	/**
	 * Inpainting Fill
	 * @default 0
	 */
	inpainting_fill?: number
	/**
	 * Inpaint Full Res
	 * @default true
	 */
	inpaint_full_res?: boolean
	/**
	 * Inpaint Full Res Padding
	 * @default 0
	 */
	inpaint_full_res_padding?: number
	/**
	 * Inpainting Mask Invert
	 * @default 0
	 */
	inpainting_mask_invert?: number
	/** Initial Noise Multiplier */
	initial_noise_multiplier?: number
	/** Latent Mask */
	latent_mask?: string
	/**
	 * Sampler Index
	 * @default "Euler"
	 */
	sampler_index?: string
	/**
	 * Include Init Images
	 * @default false
	 */
	include_init_images?: boolean
	/** Script Name */
	script_name?: string
	/**
	 * Script Args
	 * @default []
	 */
	script_args?: any[]
	/**
	 * Send Images
	 * @default true
	 */
	send_images?: boolean
	/**
	 * Save Images
	 * @default false
	 */
	save_images?: boolean
	/**
	 * Alwayson Scripts
	 * @default {}
	 */
	alwayson_scripts?: object
}

/** StableDiffusionProcessingTxt2Img */
export interface StableDiffusionProcessingTxt2Img {
	/**
	 * Prompt
	 * @default ""
	 */
	prompt?: string
	/**
	 * Negative Prompt
	 * @default ""
	 */
	negative_prompt?: string
	/** Styles */
	styles?: string[]
	/**
	 * Seed
	 * @default -1
	 */
	seed?: number
	/**
	 * Subseed
	 * @default -1
	 */
	subseed?: number
	/**
	 * Subseed Strength
	 * @default 0
	 */
	subseed_strength?: number
	/**
	 * Seed Resize From H
	 * @default -1
	 */
	seed_resize_from_h?: number
	/**
	 * Seed Resize From W
	 * @default -1
	 */
	seed_resize_from_w?: number
	/** Sampler Name */
	sampler_name?: string
	/**
	 * Batch Size
	 * @default 1
	 */
	batch_size?: number
	/**
	 * N Iter
	 * @default 1
	 */
	n_iter?: number
	/**
	 * Steps
	 * @default 50
	 */
	steps?: number
	/**
	 * Cfg Scale
	 * @default 7
	 */
	cfg_scale?: number
	/**
	 * Width
	 * @default 512
	 */
	width?: number
	/**
	 * Height
	 * @default 512
	 */
	height?: number
	/** Restore Faces */
	restore_faces?: boolean
	/** Tiling */
	tiling?: boolean
	/**
	 * Do Not Save Samples
	 * @default false
	 */
	do_not_save_samples?: boolean
	/**
	 * Do Not Save Grid
	 * @default false
	 */
	do_not_save_grid?: boolean
	/** Eta */
	eta?: number
	/**
	 * Denoising Strength
	 * @default 0
	 */
	denoising_strength?: number
	/** S Min Uncond */
	s_min_uncond?: number
	/** S Churn */
	s_churn?: number
	/** S Tmax */
	s_tmax?: number
	/** S Tmin */
	s_tmin?: number
	/** S Noise */
	s_noise?: number
	/** Override Settings */
	override_settings?: object
	/**
	 * Override Settings Restore Afterwards
	 * @default true
	 */
	override_settings_restore_afterwards?: boolean
	/** Refiner Checkpoint */
	refiner_checkpoint?: string
	/** Refiner Switch At */
	refiner_switch_at?: number
	/**
	 * Disable Extra Networks
	 * @default false
	 */
	disable_extra_networks?: boolean
	/** Comments */
	comments?: object
	/**
	 * Enable Hr
	 * @default false
	 */
	enable_hr?: boolean
	/**
	 * Firstphase Width
	 * @default 0
	 */
	firstphase_width?: number
	/**
	 * Firstphase Height
	 * @default 0
	 */
	firstphase_height?: number
	/**
	 * Hr Scale
	 * @default 2
	 */
	hr_scale?: number
	/** Hr Upscaler */
	hr_upscaler?: string
	/**
	 * Hr Second Pass Steps
	 * @default 0
	 */
	hr_second_pass_steps?: number
	/**
	 * Hr Resize X
	 * @default 0
	 */
	hr_resize_x?: number
	/**
	 * Hr Resize Y
	 * @default 0
	 */
	hr_resize_y?: number
	/** Hr Checkpoint Name */
	hr_checkpoint_name?: string
	/** Hr Sampler Name */
	hr_sampler_name?: string
	/**
	 * Hr Prompt
	 * @default ""
	 */
	hr_prompt?: string
	/**
	 * Hr Negative Prompt
	 * @default ""
	 */
	hr_negative_prompt?: string
	/**
	 * Sampler Index
	 * @default "Euler"
	 */
	sampler_index?: string
	/** Script Name */
	script_name?: string
	/**
	 * Script Args
	 * @default []
	 */
	script_args?: any[]
	/**
	 * Send Images
	 * @default true
	 */
	send_images?: boolean
	/**
	 * Save Images
	 * @default false
	 */
	save_images?: boolean
	/**
	 * Alwayson Scripts
	 * @default {}
	 */
	alwayson_scripts?: object
}

/** TextToImageResponse */
export interface TextToImageResponse {
	/**
	 * Image
	 * The generated image in base64 format.
	 */
	images?: string[]
	/** Parameters */
	parameters: object
	/** Info */
	info: string
}

/** TrainResponse */
export interface TrainResponse {
	/**
	 * Train info
	 * Response string from train embedding or hypernetwork task.
	 */
	info: string
}

/** UpscalerItem */
export interface UpscalerItem {
	/** Name */
	name: string
	/** Model Name */
	model_name?: string
	/** Path */
	model_path?: string
	/** URL */
	model_url?: string
	/** Scale */
	scale?: number
}

/** ValidationError */
export interface ValidationError {
	/** Location */
	loc: any[]
	/** Message */
	msg: string
	/** Error Type */
	type: string
}

/** ProgressResponse */
export interface ModulesApiModelsProgressResponse {
	/**
	 * Progress
	 * The progress with a range of 0 to 1
	 */
	progress: number
	/** ETA in secs */
	eta_relative: number
	/**
	 * State
	 * The current state snapshot
	 */
	state: object
	/**
	 * Current image
	 * The current image in base64 format. opts.show_progress_every_n_steps is required for this to work.
	 */
	current_image?: string
	/**
	 * Info text
	 * Info text used by WebUI.
	 */
	textinfo?: string
}

/** ProgressResponse */
export interface ModulesProgressProgressResponse {
	/** Whether the task is being worked on right now */
	active: boolean
	/** Whether the task is in queue */
	queued: boolean
	/** Whether the task has already finished */
	completed: boolean
	/**
	 * Progress
	 * The progress with a range of 0 to 1
	 */
	progress?: number
	/** ETA in secs */
	eta?: number
	/**
	 * Live preview image
	 * Current live preview; a data: uri
	 */
	live_preview?: string
	/**
	 * Live preview image ID
	 * Send this together with next request to prevent receiving same image
	 */
	id_live_preview?: number
	/**
	 * Info text
	 * Info text used by WebUI.
	 */
	textinfo?: string
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">

export interface FullRequestParams extends Omit<RequestInit, "body"> {
	/** set parameter to `true` for call `securityWorker` for this request */
	secure?: boolean
	/** request path */
	path: string
	/** content type of request body */
	type?: ContentType
	/** query params */
	query?: QueryParamsType
	/** format of response (i.e. response.json() -> format: "json") */
	format?: ResponseFormat
	/** request body */
	body?: unknown
	/** base url */
	baseUrl?: string
	/** request cancellation token */
	cancelToken?: CancelToken
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">

export interface ApiConfig<SecurityDataType = unknown> {
	baseUrl?: string
	baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">
	securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void
	customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
	data: D
	error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
	Json = "application/json",
	FormData = "multipart/form-data",
	UrlEncoded = "application/x-www-form-urlencoded",
	Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
	public baseUrl: string = ""
	private securityData: SecurityDataType | null = null
	private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"]
	private abortControllers = new Map<CancelToken, AbortController>()
	private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams)

	private baseApiParams: RequestParams = {
		credentials: "same-origin",
		headers: {},
		redirect: "follow",
		referrerPolicy: "no-referrer",
	}

	constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
		Object.assign(this, apiConfig)
	}

	public setSecurityData = (data: SecurityDataType | null) => {
		this.securityData = data
	}

	protected encodeQueryParam(key: string, value: any) {
		const encodedKey = encodeURIComponent(key)
		return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`
	}

	protected addQueryParam(query: QueryParamsType, key: string) {
		return this.encodeQueryParam(key, query[key])
	}

	protected addArrayQueryParam(query: QueryParamsType, key: string) {
		const value = query[key]
		return value.map((v: any) => this.encodeQueryParam(key, v)).join("&")
	}

	protected toQueryString(rawQuery?: QueryParamsType): string {
		const query = rawQuery || {}
		const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key])
		return keys
			.map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
			.join("&")
	}

	protected addQueryParams(rawQuery?: QueryParamsType): string {
		const queryString = this.toQueryString(rawQuery)
		return queryString ? `?${queryString}` : ""
	}

	private contentFormatters: Record<ContentType, (input: any) => any> = {
		[ContentType.Json]: (input: any) =>
			input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
		[ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
		[ContentType.FormData]: (input: any) =>
			Object.keys(input || {}).reduce((formData, key) => {
				const property = input[key]
				formData.append(
					key,
					property instanceof Blob
						? property
						: typeof property === "object" && property !== null
						? JSON.stringify(property)
						: `${property}`
				)
				return formData
			}, new FormData()),
		[ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
	}

	protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
		return {
			...this.baseApiParams,
			...params1,
			...(params2 || {}),
			headers: {
				...(this.baseApiParams.headers || {}),
				...(params1.headers || {}),
				...((params2 && params2.headers) || {}),
			},
		}
	}

	protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
		if (this.abortControllers.has(cancelToken)) {
			const abortController = this.abortControllers.get(cancelToken)
			if (abortController) {
				return abortController.signal
			}
			return void 0
		}

		const abortController = new AbortController()
		this.abortControllers.set(cancelToken, abortController)
		return abortController.signal
	}

	public abortRequest = (cancelToken: CancelToken) => {
		const abortController = this.abortControllers.get(cancelToken)

		if (abortController) {
			abortController.abort()
			this.abortControllers.delete(cancelToken)
		}
	}

	public request = async <T = any, E = any>({
		body,
		secure,
		path,
		type,
		query,
		format,
		baseUrl,
		cancelToken,
		...params
	}: FullRequestParams): Promise<HttpResponse<T, E>> => {
		const secureParams =
			((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
				this.securityWorker &&
				(await this.securityWorker(this.securityData))) ||
			{}
		const requestParams = this.mergeRequestParams(params, secureParams)
		const queryString = query && this.toQueryString(query)
		const payloadFormatter = this.contentFormatters[type || ContentType.Json]
		const responseFormat = format || requestParams.format

		return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
			...requestParams,
			headers: {
				...(requestParams.headers || {}),
				...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
			},
			signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
			body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
		}).then(async (response) => {
			const r = response as HttpResponse<T, E>
			r.data = null as unknown as T
			r.error = null as unknown as E

			const data = !responseFormat
				? r
				: await response[responseFormat]()
						.then((data) => {
							if (r.ok) {
								r.data = data
							} else {
								r.error = data
							}
							return r
						})
						.catch((e) => {
							r.error = e
							return r
						})

			if (cancelToken) {
				this.abortControllers.delete(cancelToken)
			}

			if (!response.ok) throw data
			return data
		})
	}
}

/**
 * @title FastAPI
 * @version 0.1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @name MainGet
	 * @summary Main
	 * @request GET:/
	 */
	mainGet = (params: RequestParams = {}) =>
		this.request<string, any>({
			path: `/`,
			method: "GET",
			...params,
		})

	/**
	 * No description
	 *
	 * @name MainHead
	 * @summary Main
	 * @request HEAD:/
	 */
	mainHead = (params: RequestParams = {}) =>
		this.request<string, any>({
			path: `/`,
			method: "HEAD",
			...params,
		})

	user = {
		/**
		 * No description
		 *
		 * @name GetCurrentUserUserGet
		 * @summary Get Current User
		 * @request GET:/user/
		 */
		getCurrentUserUserGet: (params: RequestParams = {}) =>
			this.request<string, any>({
				path: `/user/`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetCurrentUserUserGet2
		 * @summary Get Current User
		 * @request GET:/user
		 * @originalName getCurrentUserUserGet
		 * @duplicate
		 */
		getCurrentUserUserGet2: (params: RequestParams = {}) =>
			this.request<string, any>({
				path: `/user`,
				method: "GET",
				format: "json",
				...params,
			}),
	}
	loginCheck = {
		/**
		 * No description
		 *
		 * @name LoginCheckLoginCheckGet
		 * @summary Login Check
		 * @request GET:/login_check/
		 */
		loginCheckLoginCheckGet: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/login_check/`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name LoginCheckLoginCheckGet2
		 * @summary Login Check
		 * @request GET:/login_check
		 * @originalName loginCheckLoginCheckGet
		 * @duplicate
		 */
		loginCheckLoginCheckGet2: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/login_check`,
				method: "GET",
				format: "json",
				...params,
			}),
	}
	token = {
		/**
		 * No description
		 *
		 * @name GetTokenTokenGet
		 * @summary Get Token
		 * @request GET:/token/
		 */
		getTokenTokenGet: (params: RequestParams = {}) =>
			this.request<object, any>({
				path: `/token/`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetTokenTokenGet2
		 * @summary Get Token
		 * @request GET:/token
		 * @originalName getTokenTokenGet
		 * @duplicate
		 */
		getTokenTokenGet2: (params: RequestParams = {}) =>
			this.request<object, any>({
				path: `/token`,
				method: "GET",
				format: "json",
				...params,
			}),
	}
	appId = {
		/**
		 * No description
		 *
		 * @name AppIdAppIdGet
		 * @summary App Id
		 * @request GET:/app_id/
		 */
		appIdAppIdGet: (params: RequestParams = {}) =>
			this.request<object, any>({
				path: `/app_id/`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name AppIdAppIdGet2
		 * @summary App Id
		 * @request GET:/app_id
		 * @originalName appIdAppIdGet
		 * @duplicate
		 */
		appIdAppIdGet2: (params: RequestParams = {}) =>
			this.request<object, any>({
				path: `/app_id`,
				method: "GET",
				format: "json",
				...params,
			}),
	}
	login = {
		/**
		 * No description
		 *
		 * @name LoginLoginPost
		 * @summary Login
		 * @request POST:/login/
		 */
		loginLoginPost: (data: BodyLoginLoginPost, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/login/`,
				method: "POST",
				body: data,
				type: ContentType.UrlEncoded,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name LoginLoginPost2
		 * @summary Login
		 * @request POST:/login
		 * @originalName loginLoginPost
		 * @duplicate
		 */
		loginLoginPost2: (data: BodyLoginLoginPost, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/login`,
				method: "POST",
				body: data,
				type: ContentType.UrlEncoded,
				format: "json",
				...params,
			}),
	}
	info = {
		/**
		 * No description
		 *
		 * @name ApiInfoInfoGet
		 * @summary Api Info
		 * @request GET:/info
		 */
		apiInfoInfoGet: (
			query?: {
				/**
				 * Serialize
				 * @default true
				 */
				serialize?: boolean
			},
			params: RequestParams = {}
		) =>
			this.request<any, HTTPValidationError>({
				path: `/info`,
				method: "GET",
				query: query,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name ApiInfoInfoGet2
		 * @summary Api Info
		 * @request GET:/info/
		 * @originalName apiInfoInfoGet
		 * @duplicate
		 */
		apiInfoInfoGet2: (
			query?: {
				/**
				 * Serialize
				 * @default true
				 */
				serialize?: boolean
			},
			params: RequestParams = {}
		) =>
			this.request<any, HTTPValidationError>({
				path: `/info/`,
				method: "GET",
				query: query,
				format: "json",
				...params,
			}),
	}
	config = {
		/**
		 * No description
		 *
		 * @name GetConfigConfigGet
		 * @summary Get Config
		 * @request GET:/config
		 */
		getConfigConfigGet: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/config`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetConfigConfigGet2
		 * @summary Get Config
		 * @request GET:/config/
		 * @originalName getConfigConfigGet
		 * @duplicate
		 */
		getConfigConfigGet2: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/config/`,
				method: "GET",
				format: "json",
				...params,
			}),
	}
	static = {
		/**
		 * No description
		 *
		 * @name StaticResourceStaticPathGet
		 * @summary Static Resource
		 * @request GET:/static/{path}
		 */
		staticResourceStaticPathGet: (path: string, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/static/${path}`,
				method: "GET",
				format: "json",
				...params,
			}),
	}
	assets = {
		/**
		 * No description
		 *
		 * @name BuildResourceAssetsPathGet
		 * @summary Build Resource
		 * @request GET:/assets/{path}
		 */
		buildResourceAssetsPathGet: (path: string, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/assets/${path}`,
				method: "GET",
				format: "json",
				...params,
			}),
	}
	faviconIco = {
		/**
		 * No description
		 *
		 * @name FaviconFaviconIcoGet
		 * @summary Favicon
		 * @request GET:/favicon.ico
		 */
		faviconFaviconIcoGet: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/favicon.ico`,
				method: "GET",
				format: "json",
				...params,
			}),
	}
	proxyUrlPath = {
		/**
		 * No description
		 *
		 * @name ReverseProxyProxyUrlPathGet
		 * @summary Reverse Proxy
		 * @request GET:/proxy={url_path}
		 */
		reverseProxyProxyUrlPathGet: (urlPath: string, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/proxy=${urlPath}`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name ReverseProxyProxyUrlPathHead
		 * @summary Reverse Proxy
		 * @request HEAD:/proxy={url_path}
		 */
		reverseProxyProxyUrlPathHead: (urlPath: string, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/proxy=${urlPath}`,
				method: "HEAD",
				format: "json",
				...params,
			}),
	}
	filePathOrUrl = {
		/**
		 * No description
		 *
		 * @name FileFilePathOrUrlGet
		 * @summary File
		 * @request GET:/file={path_or_url}
		 */
		fileFilePathOrUrlGet: (pathOrUrl: string, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/file=${pathOrUrl}`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name FileFilePathOrUrlHead
		 * @summary File
		 * @request HEAD:/file={path_or_url}
		 */
		fileFilePathOrUrlHead: (pathOrUrl: string, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/file=${pathOrUrl}`,
				method: "HEAD",
				format: "json",
				...params,
			}),
	}
	stream = {
		/**
		 * No description
		 *
		 * @name StreamStreamSessionHashRunComponentIdGet
		 * @summary Stream
		 * @request GET:/stream/{session_hash}/{run}/{component_id}
		 */
		streamStreamSessionHashRunComponentIdGet: (
			sessionHash: string,
			run: number,
			componentId: number,
			params: RequestParams = {}
		) =>
			this.request<any, HTTPValidationError>({
				path: `/stream/${sessionHash}/${run}/${componentId}`,
				method: "GET",
				format: "json",
				...params,
			}),
	}
	file = {
		/**
		 * No description
		 *
		 * @name FileDeprecatedFilePathGet
		 * @summary File Deprecated
		 * @request GET:/file/{path}
		 */
		fileDeprecatedFilePathGet: (path: string, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/file/${path}`,
				method: "GET",
				format: "json",
				...params,
			}),
	}
	reset = {
		/**
		 * No description
		 *
		 * @name ResetIteratorResetPost
		 * @summary Reset Iterator
		 * @request POST:/reset
		 */
		resetIteratorResetPost: (data: ResetBody, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/reset`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name ResetIteratorResetPost2
		 * @summary Reset Iterator
		 * @request POST:/reset/
		 * @originalName resetIteratorResetPost
		 * @duplicate
		 */
		resetIteratorResetPost2: (data: ResetBody, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/reset/`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),
	}
	api = {
		/**
		 * No description
		 *
		 * @name PredictApiApiNamePost
		 * @summary Predict
		 * @request POST:/api/{api_name}/
		 */
		predictApiApiNamePost: (apiName: string, data: PredictBody, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/api/${apiName}/`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name PredictApiApiNamePost2
		 * @summary Predict
		 * @request POST:/api/{api_name}
		 * @originalName predictApiApiNamePost
		 * @duplicate
		 */
		predictApiApiNamePost2: (apiName: string, data: PredictBody, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/api/${apiName}`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),
	}
	run = {
		/**
		 * No description
		 *
		 * @name PredictRunApiNamePost
		 * @summary Predict
		 * @request POST:/run/{api_name}/
		 */
		predictRunApiNamePost: (apiName: string, data: PredictBody, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/run/${apiName}/`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name PredictRunApiNamePost2
		 * @summary Predict
		 * @request POST:/run/{api_name}
		 * @originalName predictRunApiNamePost
		 * @duplicate
		 */
		predictRunApiNamePost2: (apiName: string, data: PredictBody, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/run/${apiName}`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),
	}
	queue = {
		/**
		 * No description
		 *
		 * @name GetQueueStatusQueueStatusGet
		 * @summary Get Queue Status
		 * @request GET:/queue/status
		 */
		getQueueStatusQueueStatusGet: (params: RequestParams = {}) =>
			this.request<Estimation, any>({
				path: `/queue/status`,
				method: "GET",
				format: "json",
				...params,
			}),
	}
	upload = {
		/**
		 * No description
		 *
		 * @name UploadFileUploadPost
		 * @summary Upload File
		 * @request POST:/upload
		 */
		uploadFileUploadPost: (data: BodyUploadFileUploadPost, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/upload`,
				method: "POST",
				body: data,
				type: ContentType.FormData,
				format: "json",
				...params,
			}),
	}
	startupEvents = {
		/**
		 * No description
		 *
		 * @name StartupEventsStartupEventsGet
		 * @summary Startup Events
		 * @request GET:/startup-events
		 */
		startupEventsStartupEventsGet: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/startup-events`,
				method: "GET",
				format: "json",
				...params,
			}),
	}
	themeCss = {
		/**
		 * No description
		 *
		 * @name ThemeCssThemeCssGet
		 * @summary Theme Css
		 * @request GET:/theme.css
		 */
		themeCssThemeCssGet: (params: RequestParams = {}) =>
			this.request<string, any>({
				path: `/theme.css`,
				method: "GET",
				...params,
			}),
	}
	robotsTxt = {
		/**
		 * No description
		 *
		 * @name RobotsTxtRobotsTxtGet
		 * @summary Robots Txt
		 * @request GET:/robots.txt
		 */
		robotsTxtRobotsTxtGet: (params: RequestParams = {}) =>
			this.request<string, any>({
				path: `/robots.txt`,
				method: "GET",
				...params,
			}),
	}
	internal = {
		/**
		 * No description
		 *
		 * @name ProgressapiInternalProgressPost
		 * @summary Progressapi
		 * @request POST:/internal/progress
		 */
		progressapiInternalProgressPost: (data: ProgressRequest, params: RequestParams = {}) =>
			this.request<ModulesProgressProgressResponse, HTTPValidationError>({
				path: `/internal/progress`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name QuicksettingsHintInternalQuicksettingsHintGet
		 * @summary Quicksettings Hint
		 * @request GET:/internal/quicksettings-hint
		 */
		quicksettingsHintInternalQuicksettingsHintGet: (params: RequestParams = {}) =>
			this.request<QuicksettingsHint[], any>({
				path: `/internal/quicksettings-hint`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name LambdaInternalPingGet
		 * @summary <Lambda>
		 * @request GET:/internal/ping
		 */
		lambdaInternalPingGet: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/internal/ping`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name LambdaInternalProfileStartupGet
		 * @summary <Lambda>
		 * @request GET:/internal/profile-startup
		 */
		lambdaInternalProfileStartupGet: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/internal/profile-startup`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name DownloadSysinfoInternalSysinfoGet
		 * @summary Download Sysinfo
		 * @request GET:/internal/sysinfo
		 */
		downloadSysinfoInternalSysinfoGet: (
			query?: {
				/**
				 * Attachment
				 * @default false
				 */
				attachment?: any
			},
			params: RequestParams = {}
		) =>
			this.request<any, HTTPValidationError>({
				path: `/internal/sysinfo`,
				method: "GET",
				query: query,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name LambdaInternalSysinfoDownloadGet
		 * @summary <Lambda>
		 * @request GET:/internal/sysinfo-download
		 */
		lambdaInternalSysinfoDownloadGet: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/internal/sysinfo-download`,
				method: "GET",
				format: "json",
				...params,
			}),
	}
	sdapi = {
		/**
		 * No description
		 *
		 * @name Text2ImgapiSdapiV1Txt2ImgPost
		 * @summary Text2Imgapi
		 * @request POST:/sdapi/v1/txt2img
		 */
		text2ImgapiSdapiV1Txt2ImgPost: (data: StableDiffusionProcessingTxt2Img, params: RequestParams = {}) =>
			this.request<TextToImageResponse, HTTPValidationError>({
				path: `/sdapi/v1/txt2img`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name Img2ImgapiSdapiV1Img2ImgPost
		 * @summary Img2Imgapi
		 * @request POST:/sdapi/v1/img2img
		 */
		img2ImgapiSdapiV1Img2ImgPost: (data: StableDiffusionProcessingImg2Img, params: RequestParams = {}) =>
			this.request<ImageToImageResponse, HTTPValidationError>({
				path: `/sdapi/v1/img2img`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name ExtrasSingleImageApiSdapiV1ExtraSingleImagePost
		 * @summary Extras Single Image Api
		 * @request POST:/sdapi/v1/extra-single-image
		 */
		extrasSingleImageApiSdapiV1ExtraSingleImagePost: (data: ExtrasSingleImageRequest, params: RequestParams = {}) =>
			this.request<ExtrasSingleImageResponse, HTTPValidationError>({
				path: `/sdapi/v1/extra-single-image`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name ExtrasBatchImagesApiSdapiV1ExtraBatchImagesPost
		 * @summary Extras Batch Images Api
		 * @request POST:/sdapi/v1/extra-batch-images
		 */
		extrasBatchImagesApiSdapiV1ExtraBatchImagesPost: (data: ExtrasBatchImagesRequest, params: RequestParams = {}) =>
			this.request<ExtrasBatchImagesResponse, HTTPValidationError>({
				path: `/sdapi/v1/extra-batch-images`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name PnginfoapiSdapiV1PngInfoPost
		 * @summary Pnginfoapi
		 * @request POST:/sdapi/v1/png-info
		 */
		pnginfoapiSdapiV1PngInfoPost: (data: PNGInfoRequest, params: RequestParams = {}) =>
			this.request<PNGInfoResponse, HTTPValidationError>({
				path: `/sdapi/v1/png-info`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name ProgressapiSdapiV1ProgressGet
		 * @summary Progressapi
		 * @request GET:/sdapi/v1/progress
		 */
		progressapiSdapiV1ProgressGet: (
			query?: {
				/**
				 * Skip Current Image
				 * @default false
				 */
				skip_current_image?: boolean
			},
			params: RequestParams = {}
		) =>
			this.request<ModulesApiModelsProgressResponse, HTTPValidationError>({
				path: `/sdapi/v1/progress`,
				method: "GET",
				query: query,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name InterrogateapiSdapiV1InterrogatePost
		 * @summary Interrogateapi
		 * @request POST:/sdapi/v1/interrogate
		 */
		interrogateapiSdapiV1InterrogatePost: (data: InterrogateRequest, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/sdapi/v1/interrogate`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name InterruptapiSdapiV1InterruptPost
		 * @summary Interruptapi
		 * @request POST:/sdapi/v1/interrupt
		 */
		interruptapiSdapiV1InterruptPost: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/sdapi/v1/interrupt`,
				method: "POST",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name SkipSdapiV1SkipPost
		 * @summary Skip
		 * @request POST:/sdapi/v1/skip
		 */
		skipSdapiV1SkipPost: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/sdapi/v1/skip`,
				method: "POST",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetConfigSdapiV1OptionsGet
		 * @summary Get Config
		 * @request GET:/sdapi/v1/options
		 */
		getConfigSdapiV1OptionsGet: (params: RequestParams = {}) =>
			this.request<Options, any>({
				path: `/sdapi/v1/options`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name SetConfigSdapiV1OptionsPost
		 * @summary Set Config
		 * @request POST:/sdapi/v1/options
		 */
		setConfigSdapiV1OptionsPost: (data: object, params: RequestParams = {}) =>
			this.request<any, HTTPValidationError>({
				path: `/sdapi/v1/options`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetCmdFlagsSdapiV1CmdFlagsGet
		 * @summary Get Cmd Flags
		 * @request GET:/sdapi/v1/cmd-flags
		 */
		getCmdFlagsSdapiV1CmdFlagsGet: (params: RequestParams = {}) =>
			this.request<Flags, any>({
				path: `/sdapi/v1/cmd-flags`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetSamplersSdapiV1SamplersGet
		 * @summary Get Samplers
		 * @request GET:/sdapi/v1/samplers
		 */
		getSamplersSdapiV1SamplersGet: (params: RequestParams = {}) =>
			this.request<SamplerItem[], any>({
				path: `/sdapi/v1/samplers`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetUpscalersSdapiV1UpscalersGet
		 * @summary Get Upscalers
		 * @request GET:/sdapi/v1/upscalers
		 */
		getUpscalersSdapiV1UpscalersGet: (params: RequestParams = {}) =>
			this.request<UpscalerItem[], any>({
				path: `/sdapi/v1/upscalers`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetLatentUpscaleModesSdapiV1LatentUpscaleModesGet
		 * @summary Get Latent Upscale Modes
		 * @request GET:/sdapi/v1/latent-upscale-modes
		 */
		getLatentUpscaleModesSdapiV1LatentUpscaleModesGet: (params: RequestParams = {}) =>
			this.request<LatentUpscalerModeItem[], any>({
				path: `/sdapi/v1/latent-upscale-modes`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetSdModelsSdapiV1SdModelsGet
		 * @summary Get Sd Models
		 * @request GET:/sdapi/v1/sd-models
		 */
		getSdModelsSdapiV1SdModelsGet: (params: RequestParams = {}) =>
			this.request<SDModelItem[], any>({
				path: `/sdapi/v1/sd-models`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetSdVaesSdapiV1SdVaeGet
		 * @summary Get Sd Vaes
		 * @request GET:/sdapi/v1/sd-vae
		 */
		getSdVaesSdapiV1SdVaeGet: (params: RequestParams = {}) =>
			this.request<SDVaeItem[], any>({
				path: `/sdapi/v1/sd-vae`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetHypernetworksSdapiV1HypernetworksGet
		 * @summary Get Hypernetworks
		 * @request GET:/sdapi/v1/hypernetworks
		 */
		getHypernetworksSdapiV1HypernetworksGet: (params: RequestParams = {}) =>
			this.request<HypernetworkItem[], any>({
				path: `/sdapi/v1/hypernetworks`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetFaceRestorersSdapiV1FaceRestorersGet
		 * @summary Get Face Restorers
		 * @request GET:/sdapi/v1/face-restorers
		 */
		getFaceRestorersSdapiV1FaceRestorersGet: (params: RequestParams = {}) =>
			this.request<FaceRestorerItem[], any>({
				path: `/sdapi/v1/face-restorers`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetRealesrganModelsSdapiV1RealesrganModelsGet
		 * @summary Get Realesrgan Models
		 * @request GET:/sdapi/v1/realesrgan-models
		 */
		getRealesrganModelsSdapiV1RealesrganModelsGet: (params: RequestParams = {}) =>
			this.request<RealesrganItem[], any>({
				path: `/sdapi/v1/realesrgan-models`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetPromptStylesSdapiV1PromptStylesGet
		 * @summary Get Prompt Styles
		 * @request GET:/sdapi/v1/prompt-styles
		 */
		getPromptStylesSdapiV1PromptStylesGet: (params: RequestParams = {}) =>
			this.request<PromptStyleItem[], any>({
				path: `/sdapi/v1/prompt-styles`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetEmbeddingsSdapiV1EmbeddingsGet
		 * @summary Get Embeddings
		 * @request GET:/sdapi/v1/embeddings
		 */
		getEmbeddingsSdapiV1EmbeddingsGet: (params: RequestParams = {}) =>
			this.request<EmbeddingsResponse, any>({
				path: `/sdapi/v1/embeddings`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name RefreshCheckpointsSdapiV1RefreshCheckpointsPost
		 * @summary Refresh Checkpoints
		 * @request POST:/sdapi/v1/refresh-checkpoints
		 */
		refreshCheckpointsSdapiV1RefreshCheckpointsPost: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/sdapi/v1/refresh-checkpoints`,
				method: "POST",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name RefreshVaeSdapiV1RefreshVaePost
		 * @summary Refresh Vae
		 * @request POST:/sdapi/v1/refresh-vae
		 */
		refreshVaeSdapiV1RefreshVaePost: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/sdapi/v1/refresh-vae`,
				method: "POST",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name CreateEmbeddingSdapiV1CreateEmbeddingPost
		 * @summary Create Embedding
		 * @request POST:/sdapi/v1/create/embedding
		 */
		createEmbeddingSdapiV1CreateEmbeddingPost: (data: object, params: RequestParams = {}) =>
			this.request<CreateResponse, HTTPValidationError>({
				path: `/sdapi/v1/create/embedding`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name CreateHypernetworkSdapiV1CreateHypernetworkPost
		 * @summary Create Hypernetwork
		 * @request POST:/sdapi/v1/create/hypernetwork
		 */
		createHypernetworkSdapiV1CreateHypernetworkPost: (data: object, params: RequestParams = {}) =>
			this.request<CreateResponse, HTTPValidationError>({
				path: `/sdapi/v1/create/hypernetwork`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name PreprocessSdapiV1PreprocessPost
		 * @summary Preprocess
		 * @request POST:/sdapi/v1/preprocess
		 */
		preprocessSdapiV1PreprocessPost: (data: object, params: RequestParams = {}) =>
			this.request<PreprocessResponse, HTTPValidationError>({
				path: `/sdapi/v1/preprocess`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name TrainEmbeddingSdapiV1TrainEmbeddingPost
		 * @summary Train Embedding
		 * @request POST:/sdapi/v1/train/embedding
		 */
		trainEmbeddingSdapiV1TrainEmbeddingPost: (data: object, params: RequestParams = {}) =>
			this.request<TrainResponse, HTTPValidationError>({
				path: `/sdapi/v1/train/embedding`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name TrainHypernetworkSdapiV1TrainHypernetworkPost
		 * @summary Train Hypernetwork
		 * @request POST:/sdapi/v1/train/hypernetwork
		 */
		trainHypernetworkSdapiV1TrainHypernetworkPost: (data: object, params: RequestParams = {}) =>
			this.request<TrainResponse, HTTPValidationError>({
				path: `/sdapi/v1/train/hypernetwork`,
				method: "POST",
				body: data,
				type: ContentType.Json,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetMemorySdapiV1MemoryGet
		 * @summary Get Memory
		 * @request GET:/sdapi/v1/memory
		 */
		getMemorySdapiV1MemoryGet: (params: RequestParams = {}) =>
			this.request<MemoryResponse, any>({
				path: `/sdapi/v1/memory`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name UnloadapiSdapiV1UnloadCheckpointPost
		 * @summary Unloadapi
		 * @request POST:/sdapi/v1/unload-checkpoint
		 */
		unloadapiSdapiV1UnloadCheckpointPost: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/sdapi/v1/unload-checkpoint`,
				method: "POST",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name ReloadapiSdapiV1ReloadCheckpointPost
		 * @summary Reloadapi
		 * @request POST:/sdapi/v1/reload-checkpoint
		 */
		reloadapiSdapiV1ReloadCheckpointPost: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/sdapi/v1/reload-checkpoint`,
				method: "POST",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetScriptsListSdapiV1ScriptsGet
		 * @summary Get Scripts List
		 * @request GET:/sdapi/v1/scripts
		 */
		getScriptsListSdapiV1ScriptsGet: (params: RequestParams = {}) =>
			this.request<ScriptsList, any>({
				path: `/sdapi/v1/scripts`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetScriptInfoSdapiV1ScriptInfoGet
		 * @summary Get Script Info
		 * @request GET:/sdapi/v1/script-info
		 */
		getScriptInfoSdapiV1ScriptInfoGet: (params: RequestParams = {}) =>
			this.request<ScriptInfo[], any>({
				path: `/sdapi/v1/script-info`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetLorasSdapiV1LorasGet
		 * @summary Get Loras
		 * @request GET:/sdapi/v1/loras
		 */
		getLorasSdapiV1LorasGet: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/sdapi/v1/loras`,
				method: "GET",
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name RefreshLorasSdapiV1RefreshLorasPost
		 * @summary Refresh Loras
		 * @request POST:/sdapi/v1/refresh-loras
		 */
		refreshLorasSdapiV1RefreshLorasPost: (params: RequestParams = {}) =>
			this.request<any, any>({
				path: `/sdapi/v1/refresh-loras`,
				method: "POST",
				format: "json",
				...params,
			}),
	}
	sdExtraNetworks = {
		/**
		 * No description
		 *
		 * @name FetchFileSdExtraNetworksThumbGet
		 * @summary Fetch File
		 * @request GET:/sd_extra_networks/thumb
		 */
		fetchFileSdExtraNetworksThumbGet: (
			query?: {
				/**
				 * Filename
				 * @default ""
				 */
				filename?: string
			},
			params: RequestParams = {}
		) =>
			this.request<any, HTTPValidationError>({
				path: `/sd_extra_networks/thumb`,
				method: "GET",
				query: query,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetMetadataSdExtraNetworksMetadataGet
		 * @summary Get Metadata
		 * @request GET:/sd_extra_networks/metadata
		 */
		getMetadataSdExtraNetworksMetadataGet: (
			query?: {
				/**
				 * Page
				 * @default ""
				 */
				page?: string
				/**
				 * Item
				 * @default ""
				 */
				item?: string
			},
			params: RequestParams = {}
		) =>
			this.request<any, HTTPValidationError>({
				path: `/sd_extra_networks/metadata`,
				method: "GET",
				query: query,
				format: "json",
				...params,
			}),

		/**
		 * No description
		 *
		 * @name GetSingleCardSdExtraNetworksGetSingleCardGet
		 * @summary Get Single Card
		 * @request GET:/sd_extra_networks/get-single-card
		 */
		getSingleCardSdExtraNetworksGetSingleCardGet: (
			query?: {
				/**
				 * Page
				 * @default ""
				 */
				page?: string
				/**
				 * Tabname
				 * @default ""
				 */
				tabname?: string
				/**
				 * Name
				 * @default ""
				 */
				name?: string
			},
			params: RequestParams = {}
		) =>
			this.request<any, HTTPValidationError>({
				path: `/sd_extra_networks/get-single-card`,
				method: "GET",
				query: query,
				format: "json",
				...params,
			}),
	}
}
