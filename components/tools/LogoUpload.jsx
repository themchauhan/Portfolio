"use client"

// Logo picker for the free tools. The image is read in the browser as a data URL
// and never uploaded anywhere.
export default function LogoUpload({ value, onChange, label = "Logo", className = "" }) {
  const pick = (e) => {
    const file = e.target.files?.[0];
    e.target.value = ""; // allow picking the same file again
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { alert("Please choose a logo under 2 MB."); return; }
    const reader = new FileReader();
    reader.onload = () => onChange(String(reader.result));
    reader.readAsDataURL(file);
  };

  return (
    <div className={className}>
      <p className="block text-sm font-medium">{label} <span className="font-normal text-[#777]">(optional, stays on your device)</span></p>
      <div className="mt-1.5 flex items-center gap-3">
        {value && <img src={value} alt="" className="h-12 w-12 rounded border border-black/10 object-contain" />}
        <label className="cursor-pointer rounded-full border border-black/20 px-4 py-2 text-sm font-semibold hover:border-[#111]">
          {value ? "Change logo" : "Upload logo"}
          <input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" onChange={pick} className="sr-only" />
        </label>
        {value && <button type="button" onClick={() => onChange("")} className="text-sm text-[#777] hover:text-rose-600">Remove</button>}
      </div>
    </div>
  );
}
