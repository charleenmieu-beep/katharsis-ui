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

    <main className="min-h-screen bg-[#788892] text-[#d6dde2] overflow-x-hidden overflow-y-auto">

      {/* MAIN CONTAINER */}

      <div className="relative min-h-screen border border-[#5d6972] m-4 bg-[#8696a0] shadow-[0_0_50px_rgba(0,0,0,0.28)]">

        {/* CORNERS */}

        <div className="absolute top-4 left-4 w-5 h-5 border-l border-t border-[#93a8b4]" />
        <div className="absolute top-4 right-4 w-5 h-5 border-r border-t border-[#93a8b4]" />
        <div className="absolute bottom-4 left-4 w-5 h-5 border-l border-b border-[#93a8b4]" />
        <div className="absolute bottom-4 right-4 w-5 h-5 border-r border-b border-[#93a8b4]" />

        {/* TOP BAR */}

        <header className="h-20 border-b border-[#66757f] flex items-center justify-between px-10 bg-[#81919a]/80 backdrop-blur-sm">

          <div className="flex items-center gap-10">

            <div className="uppercase tracking-[0.42em] text-[12px] text-[#edf5f8]">
              PALISADE SYSTEM
            </div>

            <div className="uppercase tracking-[0.28em] text-[10px] text-[#b8c6ce]">
              SYS. VER. 2.7.1
            </div>

          </div>

          <div className="flex items-center gap-10 uppercase tracking-[0.25em] text-[10px] text-[#b8c6ce]">

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

        <div className="grid grid-cols-[320px_1fr_420px] min-h-[calc(100vh-80px)]">

          {/* LEFT PANEL */}

          <aside className="border-r border-[#66757f] p-8 flex flex-col bg-[#7b8a94]/70">

            {/* LOGO */}

            <div className="relative border border-[#74828b] bg-[#6f5d8533] h-[620px] overflow-hidden flex items-center justify-center shadow-inner">

              <img
                src="/plogo2.png"
                alt="logo"
                className="
                  absolute
                  left-1/2
                  top-1/2
                  w-[150%]
                  h-[150%]
                  -translate-x-1/2
                  -translate-y-1/2
                  object-contain
                  opacity-[0.28]
                  scale-[1.3]
                  contrast-125
                  brightness-125
                "
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(157,233,240,0.12)_0%,transparent_70%)]" />

              <div className="relative z-20 text-center">

                <div className="text-[36px] tracking-[0.32em] text-[#edf5f8] pl-5">

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

                  <span className="text-[#edf5f8]">

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

              <div className="text-[11px] text-[#edf5f8]">

                &gt; No new alerts.

              </div>

            </div>

          </aside>

          {/* CENTER PANEL */}

<section className="relative overflow-hidden flex items-center justify-center bg-[#7f8d96]">

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

  <div className="absolute top-6 left-1/6 -translate-x-1/9 z-20 text-center">

    <div className="3xl border border-white/20 bg-grey/15 px-8 py-6 backdrop-blur-md shadow-lg">

      <div className="text-[36px] tracking-[0.32em] text-[#f0f6fa]">

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
      h-[108vh]
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
              bg-[radial-gradient(circle_at_center,rgba(157,233,240,0.12),transparent_70%)]
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

          <aside className="border-l border-[#66757f] p-8 overflow-y-auto bg-[#7b8a94]/70">

            {/* SUBJECT PROFILE */}

            <div className="mb-10">

              <div className="uppercase tracking-[0.28em] text-[11px] text-[#c4d0d7] mb-5">

                Subject Profile

              </div>

              <div className="border border-[#74828b] bg-[#6f5d8528] p-6">

                <div className="grid grid-cols-2 gap-y-5 text-sm">

                  <div className="text-[#c4d0d7]">ID</div>
                  <div>R9-0412-YH</div>

                  <div className="text-[#c4d0d7]">Affiliation</div>
                  <div>Palisade</div>

                  <div className="text-[#c4d0d7]">Role</div>
                  <div>Field Operative</div>

                  <div className="text-[#c4d0d7]">Clearance</div>
                  <div>04</div>

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