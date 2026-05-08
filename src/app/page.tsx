"use client"

import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter()

  const menuItems = [
    "MISSION BRIEFING",
    "LOADOUT",
    "ACCESS LOGS",
    "TRACE",
    "INTEL DATABASE",
    "SYSTEM SETTINGS",
  ]

  return (

    <main className="min-h-screen w-full bg-[#708090] text-[#e4edf2] overflow-x-hidden overflow-y-auto">

      {/* MAIN CONTAINER */}

      <div className="relative min-h-screen w-full overflow-hidden border border-[#8796a3] m-0 lg:m-4 bg-[#7b8b97] shadow-[0_0_50px_rgba(0,0,0,0.28)]">

        {/* CORNERS */}

        <div className="absolute top-4 left-4 w-5 h-5 border-l border-t border-[#b4c0c9]" />
        <div className="absolute top-4 right-4 w-5 h-5 border-r border-t border-[#b4c0c9]" />
        <div className="absolute bottom-4 left-4 w-5 h-5 border-l border-b border-[#b4c0c9]" />
        <div className="absolute bottom-4 right-4 w-5 h-5 border-r border-b border-[#b4c0c9]" />

        {/* TOP BAR */}

        <header className="min-h-[80px] border-b border-[#93a1ad] flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-10 py-4 gap-4 bg-[#748490]/90 backdrop-blur-sm">

<div className="flex items-center gap-4 sm:gap-8 lg:gap-10 flex-wrap justify-center lg:justify-start">
            <div className="uppercase tracking-[0.42em] text-[12px] text-[#f3f8fb]">
              PALISADE SYSTEM
            </div>

            <div className="uppercase tracking-[0.28em] text-[10px] text-[#d1dbe2]">
              SYS. VER. 2.7.1
            </div>

          </div>

          <div className="flex items-center gap-4 sm:gap-8 lg:gap-10 uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[9px] sm:text-[10px] text-[#d1dbe2] flex-wrap justify-center">

            <div>
              USER: [ ---------- ]
            </div>

            <div className="flex items-center gap-3">

              <span>
                STATUS: ACTIVE
              </span>

              <div className="w-2 h-2 rounded-full bg-[#9de9f0] shadow-[0_0_12px_#9de9f0]" />

            </div>

          </div>

        </header>

        {/* GRID */}

       <div
  className="
    grid
    grid-cols-1
    lg:grid-cols-[320px_minmax(0,1fr)_420px]
    min-h-[calc(100vh-80px)]
    overflow-hidden
  "
>

          {/* LEFT PANEL */}

          <aside className="border-b lg:border-b-0 lg:border-r border-[#93a1ad] p-4 sm:p-6 lg:p-8 flex flex-col bg-[#6f7f8a]/75 overflow-hidden">
            {/* LOGO */}

            <div className="relative border border-[#74828b] bg-[#5f6d7828] h-[420px] lg:h-[620px] overflow-hidden flex items-center justify-center shadow-inner">

              <img
                src="/plogo2.png"
                alt="logo"
                className="
                  absolute
                  left-1/2
                  top-1/2
                  w-[125%]
                  h-[125%]
                  -translate-x-1/2
                  -translate-y-1/2
                  object-contain
                  opacity-[0.34]
                  scale-[1.3]
                  contrast-150
                  brightness-140
                "
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(180,220,235,0.16)_0%,transparent_70%)]" />

              <div className="relative z-20 text-center">

                <div className="text-[24px] lg:text-[36px] tracking-[0.22em] lg:tracking-[0.32em] text-[#f3f8fb] pl-2 lg:pl-5">

                  PALISADE

                </div>

                <div className="mt-5 uppercase tracking-[0.30em] text-[10px] text-[#c8d3d9] leading-6">

                  STRUCTURAL INTEGRITY
                  <br />
                  OVERSIGHT NETWORK

                </div>

              </div>

            </div>

            {/* MENU */}

            <div className="mt-10 space-y-4">

              {menuItems.map((item, index) => (

                <button
                  key={item}
                  onClick={() => {
                    if (item === "ARCHIVE") {
                      router.push("/archive")
                    }
                  }}
                  className={`
                    w-full
                    text-left
                    px-5
                    py-4
                    border
                    uppercase
                    tracking-[0.28em]
                    text-[11px]
                    transition-all
                    duration-300
                    backdrop-blur-sm

                    ${
                      index === 0
                        ? "border-[#9de9f0] bg-[#6f5d8540]"
                        : "border-[#91a0a9]/20 hover:border-[#9de9f0] hover:bg-[#6f5d8528]"
                    }
                  `}
                >

                  <span className="mr-4 text-[#9de9f0]">

                    //

                  </span>

                  <span className="text-[#f3f8fb]">

                    {item}

                  </span>

                </button>

              ))}

            </div>

            {/* NOTIFICATIONS */}

            <div className="mt-auto border border-[#74828b] bg-[#6f5d8528] p-5 backdrop-blur-sm">

              <div className="uppercase tracking-[0.25em] text-[10px] text-[#c2cfd6] mb-4">

                Notifications

              </div>

              <div className="text-[11px] text-[#f3f8fb]">

                &gt; No new alerts.

              </div>

            </div>

          </aside>

          {/* CENTER PANEL */}

<section className="relative overflow-hidden flex items-center justify-center bg-[#768691] min-h-[65vh] lg:min-h-0 w-full">
  {/* GRID */}

  <div className="absolute inset-0 opacity-[0.08]">

    <div className="w-full h-full bg-[linear-gradient(to_right,#d4edf522_1px,transparent_1px),linear-gradient(to_bottom,#d4edf522_1px,transparent_1px)] bg-[size:80px_80px]" />

  </div>

  {/* BIG LOGO */}

  <img
    src="/palisade-logo-grey.png"
    alt="bg"
    className="absolute inset-0 w-full h-full object-contain opacity-[0.10] scale-[1.2]"
  />

  {/* NAME */}

<div className="absolute top-3 sm:top-6 left-1/2 -translate-x-1/2 z-20 text-center px-4 w-full flex justify-center pointer-events-none"><div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-black/10 backdrop-blur-md shadow-lg w-[92%] sm:w-auto max-w-[680px] px-4 sm:px-8 py-3 sm:py-6">
      <div className="text-[22px] sm:text-[36px] tracking-[0.18em] sm:tracking-[0.32em] leading-[1.5] sm:leading-normal text-[#f0f6fa] break-words">

        SIENNA V. CROSS

      </div>

    </div>

  </div>

  {/* CHARACTER */}

  <img
    src="/Sienna2.png"
    alt="character"
    className="
      relative
      z-10
      max-h-[70vh] lg:max-h-[108vh] w-auto max-w-full
      object-contain
      drop-shadow-[0_30px_70px_rgba(0,0,0,0.35)]
    "
  />

  {/* IMAGE LIBRARY */}

  <div className="absolute bottom-0 left-0 right-0 z-30">

    <div className="border-t border-[#6f7e87] bg-[#73818b]/80 backdrop-blur-md px-8 py-5">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-5">

        <div className="uppercase tracking-[0.30em] text-[10px] text-[#d3dde3]">

          Image Library

        </div>

        <div className="uppercase tracking-[0.22em] text-[9px] text-[#aab8c0]">

          Synced Archive Assets

        </div>

      </div>

      {/* LIBRARY STRIP */}

      <div className="flex gap-4 overflow-x-auto pb-2">

        {[1,2,3,4,5,6].map((item) => (

          <div
            key={item}
            className="
              group
              min-w-[190px]
              h-[115px]
              border
              border-[#7f8f98]
              bg-[#65557922]
              backdrop-blur-sm
              overflow-hidden
              relative
              transition-all
              duration-300
              cursor-pointer

              hover:bg-[#4f5960]
              hover:border-[#9de9f0]
              hover:shadow-[0_0_18px_rgba(157,233,240,0.35)]
              hover:-translate-y-1
            "
          >

            {/* INNER GLOW */}

            <div className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-300
              bg-[radial-gradient(circle_at_center,rgba(87,231,106,0.3),transparent_70%)]
            " />

            {/* SLOT TEXT */}

            <div className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              text-[#c5d0d7]
              text-[10px]
              tracking-[0.28em]
              uppercase
            ">

              Empty Slot

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>
          {/* RIGHT PANEL */}

<aside className="border-t lg:border-t-0 lg:border-l border-[#66757f] p-4 sm:p-6 lg:p-8 overflow-hidden bg-[#7b8a94]/70">
           {/* SUBJECT PROFILE */}

<div className="mb-10">

  <div className="uppercase tracking-[0.28em] text-[11px] text-[#c4d0d7] mb-5">

    Subject Profile

  </div>

  <div className="border border-[#74828b] bg-[#6f5d8528] p-6 backdrop-blur-sm">

    <div className="grid grid-cols-2 gap-y-5 text-sm">

      <div className="text-[#c4d0d7]">
        ID
      </div>

      <div>
        R9-0412-YH
      </div>

      <div className="text-[#c4d0d7]">
        Affiliation
      </div>

      <div>
        Palisade
      </div>

      <div className="text-[#c4d0d7]">
        Role
      </div>

      <div>
        Field Operative
      </div>

      <div className="text-[#c4d0d7]">
        Callsign
      </div>

      <div className="tracking-[0.18em] text-[#9de9f0]">
        VANTAGE
      </div>

      <div className="text-[#c4d0d7]">
        Clearance
      </div>

      <div>
        04
      </div>

    </div>

  </div>

</div>
            {/* SYSTEM STATUS */}

            <div className="mb-10">

              <div className="uppercase tracking-[0.28em] text-[11px] text-[#c4d0d7] mb-5">

                System Status

              </div>

              <div className="grid grid-cols-3 gap-4">

                {[
                  "Biochip Sync",
                  "Cognitive State",
                  "Network Link"
                ].map((item) => (

                  <div
                    key={item}
                    className="
                      border
                      border-[#74828b]
                      bg-[#6f5d8528]
                      h-48
                      p-5
                    "
                  >

                    <div className="uppercase tracking-[0.22em] text-[10px] text-[#c4d0d7] mb-8">

                      {item}

                    </div>

                    <div className="flex items-center justify-center h-20 text-[#d6e2e8] text-5xl">

                      ○

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* ACTIVE DIRECTIVES */}

            <div>

              <div className="uppercase tracking-[0.28em] text-[11px] text-[#c4d0d7] mb-5">

                Active Directives

              </div>

              <div className="border border-[#74828b] bg-[#6f5d8528] p-6 space-y-5 text-sm">

                <div className="flex justify-between">

                  <span>
                    PRIORITY TARGET: UNKNOWN
                  </span>

                  <span className="text-[#9de9f0]">
                    IN PROGRESS
                  </span>

                </div>

                <div className="flex justify-between">

                  <span>
                    DATA RETRIEVAL
                  </span>

                  <span className="text-[#9de9f0]">
                    IN PROGRESS
                  </span>

                </div>

                <div className="flex justify-between">

                  <span>
                    SURVEILLANCE PROTOCOL
                  </span>

                  <span className="text-[#9de9f0]">
                    IN PROGRESS
                  </span>

                </div>

              </div>

            </div>

          </aside>

        </div>

      </div>

    </main>

  )

}