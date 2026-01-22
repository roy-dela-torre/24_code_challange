import os
from PIL import Image
import io

def optimize_image(image_path, max_size_kb=500):
    """
    Optimize an image to be under the specified size in KB.
    
    Args:
        image_path: Path to the image file
        max_size_kb: Maximum size in kilobytes (default: 500)
    """
    max_size_bytes = max_size_kb * 1024
    
    try:
        img = Image.open(image_path)
        
        # Convert RGBA to RGB if necessary
        if img.mode == 'RGBA':
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[3])
            img = background
        elif img.mode not in ('RGB', 'L'):
            img = img.convert('RGB')
        
        # Check current size
        if os.path.getsize(image_path) <= max_size_bytes:
            print(f"✓ {os.path.basename(image_path)} already optimized")
            return
        
        # Start with quality 85 and reduce until size is acceptable
        quality = 85
        while quality > 10:
            buffer = io.BytesIO()
            img.save(buffer, format='JPEG', optimize=True, quality=quality)
            
            if buffer.tell() <= max_size_bytes:
                # Save the optimized image
                with open(image_path, 'wb') as f:
                    f.write(buffer.getvalue())
                print(f"✓ Optimized {os.path.basename(image_path)} to {buffer.tell() / 1024:.2f}KB (quality: {quality})")
                return
            
            quality -= 5
        
        print(f"⚠ Warning: Could not optimize {os.path.basename(image_path)} below {max_size_kb}KB")
        
    except Exception as e:
        print(f"✗ Error processing {os.path.basename(image_path)}: {str(e)}")

def optimize_all_images(directory):
    """
    Optimize all images in the specified directory.
    
    Args:
        directory: Path to the directory containing images
    """
    supported_formats = ('.jpg', '.jpeg', '.png', '.bmp', '.gif', '.webp')
    
    if not os.path.exists(directory):
        print(f"Error: Directory '{directory}' does not exist")
        return
    
    image_files = [f for f in os.listdir(directory) 
                   if f.lower().endswith(supported_formats)]
    
    if not image_files:
        print(f"No images found in '{directory}'")
        return
    
    print(f"Found {len(image_files)} images to optimize...\n")
    
    for filename in image_files:
        image_path = os.path.join(directory, filename)
        optimize_image(image_path)
    
    print(f"\nOptimization complete!")

if __name__ == "__main__":
    image_directory = r"C:\Users\boyde\OneDrive\Documents\exam\shopify_exam\assets\img"
    optimize_all_images(image_directory)