
function Stats() {
  return (
     <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 border border-slate-800">
                    <div className="text-xl sm:text-2xl font-bold text-yellow-400">
                      80+
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400">
                      Followers
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 border border-slate-800">
                    <div className="text-xl sm:text-2xl font-bold text-orange-400">
                      5k+
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400">
                      Vues
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 border border-slate-800 col-span-2 sm:col-span-1">
                    <div className="text-xl sm:text-2xl font-bold text-pink-400">
                      20+
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400">
                      Vidéos
                    </div>
                  </div>
                </div>
  )
}

export default Stats