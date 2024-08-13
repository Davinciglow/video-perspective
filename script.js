{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Replace with your Remove.bg API key\
const REMOVE_BG_API_KEY = 'YOUR_REMOVE_BG_API_KEY';\
\
document.getElementById('remove-background').addEventListener('click', async () => \{\
    const fileInput = document.getElementById('image-upload');\
    if (fileInput.files.length === 0) \{\
        alert('Please upload an image.');\
        return;\
    \}\
    \
    const file = fileInput.files[0];\
    const formData = new FormData();\
    formData.append('image_file', file);\
\
    try \{\
        const response = await fetch('https://api.remove.bg/v1.0/removebg', \{\
            method: 'POST',\
            headers: \{\
                'X-Api-Key': REMOVE_BG_API_KEY,\
            \},\
            body: formData,\
        \});\
\
        if (response.ok) \{\
            const blob = await response.blob();\
            const url = URL.createObjectURL(blob);\
            const img = document.createElement('img');\
            img.src = url;\
            document.body.appendChild(img);\
        \} else \{\
            console.error('Failed to remove background');\
        \}\
    \} catch (error) \{\
        console.error('Error:', error);\
    \}\
\});\
}