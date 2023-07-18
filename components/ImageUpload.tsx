"use client";

import { useState, ChangeEvent, DragEvent, useRef } from "react";
import Image from "next/image";
type Props = {};

const ImageUpload = (props: Props) => {
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const [result, setResult] = useState<string | null>(null);

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0];
		if (file) {
			setResult(null);
			setSelectedImage(file);
			// Create a preview URL for the selected image
			setImagePreview(URL.createObjectURL(file));
		}
	};

	const handleImageDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		const file = e.dataTransfer.files && e.dataTransfer.files[0];
		if (file && file.type.startsWith("image/")) {
			setSelectedImage(file);
			// Create a preview URL for the dropped image
			setImagePreview(URL.createObjectURL(file));
		}
	};

	const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	const handleImageUpload = async () => {
		try {
			if (!selectedImage) return;
			const headers = new Headers({
				"accept": "application/json",
			});
			const formData = new FormData();
			formData.append("image", selectedImage);

			// Replace the URL with your API endpoint
			const apiUrl = "https://breed-detection.onrender.com/detect/";

			// Adjust headers for multipart form data
			const config = {
				method: "POST",
				body: formData,
				headers: headers,
			};

			const response = await fetch(apiUrl, config);
			const data = await response.json();
			console.log("API response:", data);

			// Handle the API response as needed
			setResult(data.breed);
		} catch (error) {
			console.error("Error uploading image:", error);
		}
	};

	const handleDragAndDropClick = () => {
		alert("clicked");
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	return (
		<div className="image_upload">
			<div
				onDrop={handleImageDrop}
				onDragOver={handleDragOver}
				onClick={handleDragAndDropClick}
				className={`drag_n_drop${selectedImage ? " active" : ""}`}
			>
				{imagePreview ? (
					<div className="image_container">
						<Image src={imagePreview} alt="Selected Image" layout="fill" />
					</div>
				) : (
					<div className="drag_n_drop_text">
						<p>Drag and drop an image</p>
						<p>or click to select one.</p>
					</div>
				)}
				<input
					type="file"
					onChange={handleImageChange}
					style={{ display: "none" }}
					ref={fileInputRef}
				/>
			</div>
			<button
				className="black_btn orange_gradient"
				onClick={handleImageUpload}
				disabled={!selectedImage}
			>
				Detect
			</button>
			{result && (
				<h2 className="head_text text-center">
					Your pet is a <br className="max-md:hidden" />
					<span className="blue_gradient text-center">{result}</span>
				</h2>
			)}
		</div>
	);
};

export default ImageUpload;
