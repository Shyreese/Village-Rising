const supportMethods = [
  {
    title: "Mail a Check",
    content: (
      <>
        <p className="font-['Inter',sans-serif] text-[#4a5565] text-[14px] leading-[22.75px]">
          Village Rising
        </p>
        <p className="font-['Inter',sans-serif] text-[#4a5565] text-[14px] leading-[22.75px]">
          Sacramento, CA
        </p>
      </>
    ),
  },
  {
    title: "Stock Donations",
    content: (
      <>
        <p className="font-['Inter',sans-serif] text-[#4a5565] text-[14px] leading-[22.75px]">
          Transfer appreciated securities for additional tax benefits.
        </p>
        <p className="font-['Inter',sans-serif] text-[#c6a646] text-[14px] mt-3 cursor-pointer hover:underline">
          Learn more →
        </p>
      </>
    ),
  },
  {
    title: "Workplace Giving",
    content: (
      <p className="font-['Inter',sans-serif] text-[#4a5565] text-[14px] leading-[22.75px]">
        Ask your employer about matching programs to double your impact.
      </p>
    ),
  },
  {
    title: "Planned Giving",
    content: (
      <p className="font-['Inter',sans-serif] text-[#4a5565] text-[14px] leading-[22.75px]">
        Leave a lasting legacy through your estate planning.
      </p>
    ),
  },
];

export function OtherWaysToSupport() {
  return (
    <div className="bg-[rgba(255,255,255,0.92)] rounded-[24px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] p-8 md:p-10">
      <h3 className="font-['DM_Serif_Display',serif] text-[#2c2c2c] text-[30px] text-center mb-8">
        Other Ways to Support
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {supportMethods.map((method) => (
          <div
            key={method.title}
            className="rounded-[16px] p-6"
            style={{
              backgroundImage:
                "linear-gradient(158deg, rgba(107, 124, 89, 0.1) 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          >
            <h4 className="font-['Inter',sans-serif] text-[#2c2c2c] text-[20px] mb-2">
              {method.title}
            </h4>
            {method.content}
          </div>
        ))}
      </div>
    </div>
  );
}
