import React, { useState } from 'react';
import axios from 'axios';
import '../Styling/Uploadcontent.css';

const placeholderImageUrl = 'https://via.placeholder.com/200x400';

const UploadContents = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setSelectedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        try {
            await axios.post('https://8080-speckleszzzz-vtuberhub-20diwumbtyg.ws-us110.gitpod.io/', { 
                name,
                description,
                imageUrl: selectedImage
            });
            alert('Upload successful');
        } catch (error) {
            console.error('Error uploading:', error);
            alert('Failed to upload');
        }
    };

    return (
        <div className='container'>
            <div className='bg-white absolute flex flex-col items-center box'>
                <h2 className='text-black'>Upload your content</h2>
                <div className="line"></div>
                {selectedImage ? (
                    <img 
                      src={selectedImage} 
                      alt="Uploaded" 
                      className='uploaded-image' 
                      style={{ maxWidth: '200px', maxHeight: '400px', width: 'auto', height: 'auto' }} 
                    />
                ) : (
                    <div>
                        <img src={placeholderImageUrl} alt="Placeholder" className="placeholder-image" />
                        <p className="placeholder-info">Dimensions: 736w x 1472h px</p>
                        <div className="file-input-container">
                            <input type="file" accept="image/*" onChange={handleImageUpload} className="file-input"/>
                        </div>
                    </div>
                )}
                <div className="line"></div>

                <br></br>

                <div>
                    <div className='flex items-center justify-start space-x-11'>
                        <label className='flex justify-start' htmlFor="name">Name:</label>
                        <input className='w-[300px] border-2 border-slate-950' type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <br></br>
                    <div className='flex items-start justify-start space-x-1.5'>
                        <label htmlFor="description">Description:</label>
                        <textarea className='w-[300px] border-2 border-slate-950' id="description" name="description" rows="3" cols="50" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                </div>

                <div>
                    <button className=' bg-slate-600 text-white' onClick={handleSubmit}>Submit</button>
                </div>
                
            </div>
        </div>
    );
};

export default UploadContents;
