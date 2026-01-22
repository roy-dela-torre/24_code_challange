from PIL import Image
import zipfile
import os
import json

def sketch_to_png(sketch_file_path, output_dir=None):
    """
    Convert a Sketch file to PNG images.
    Sketch files are zip archives containing JSON and image data.
    """
    if output_dir is None:
        output_dir = os.path.dirname(sketch_file_path)
    
    # Extract the sketch file (it's a zip archive)
    sketch_name = os.path.splitext(os.path.basename(sketch_file_path))[0]
    extract_dir = os.path.join(output_dir, f"{sketch_name}_extracted")
    
    try:
        with zipfile.ZipFile(sketch_file_path, 'r') as zip_ref:
            zip_ref.extractall(extract_dir)
        
        # Look for preview images in the pages directory
        previews_dir = os.path.join(extract_dir, "previews")
        pages_dir = os.path.join(extract_dir, "pages")
        
        png_files = []
        
        # Check for existing preview PNGs
        if os.path.exists(previews_dir):
            for file in os.listdir(previews_dir):
                if file.endswith('.png'):
                    src = os.path.join(previews_dir, file)
                    dst = os.path.join(output_dir, f"{sketch_name}_{file}")
                    
                    # Copy preview to output directory
                    with open(src, 'rb') as f_src:
                        with open(dst, 'wb') as f_dst:
                            f_dst.write(f_src.read())
                    
                    png_files.append(dst)
                    print(f"Exported: {dst}")
        
        if not png_files:
            print("No preview images found. You may need to use Sketch app or sketchtool CLI for full conversion.")
        
        return png_files
        
    except Exception as e:
        print(f"Error: {e}")
        return []

if __name__ == "__main__":
    sketch_file = r"C:\Users\boyde\Downloads\D1 Code Test.sketch"
    output_images = sketch_to_png(sketch_file)
    
    if output_images:
        print(f"\nSuccessfully extracted {len(output_images)} PNG file(s)")
    else:
        print("\nNote: For full Sketch to PNG conversion, consider using:")
        print("1. Sketch app's export feature")
        print("2. sketchtool CLI (requires macOS)")
        print("3. Online conversion services")