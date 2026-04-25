export default function FormSelect({ Icon, ...props }) {
    return (
        <div className="w-full space-y-2">
            {props.label && (
                <label className="block text-sm font-medium text-white">
                    {props.label}
                    {props.required && (
                        <span className="text-violet-400 ml-1">*</span>
                    )}
                </label>
            )}
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0f172a]/60 px-4 py-3 focus-within:border-violet-500 focus-within:ring-1 focus-within:ring-violet-500/30 transition-all">
                {Icon && (
                    <Icon className="text-white/40 text-lg shrink-0" />
                )}
                <select {...props} className="w-full bg-transparent text-sm outline-none appearance-none text-white">
                    <option value="" disabled defaultValue className="bg-[#0f172a]/60 text-white/40">
                        {props.placeholder}
                    </option>
                    {props.options.map((option) => (
                        <option key={option.value} value={option.value} className="bg-[#0f172a] text-white">
                            {option.label}
                        </option>
                    ))}
                </select>
                <span className="text-white/40 text-sm">
                    ▾
                </span>
            </div>
        </div>
    );
}
