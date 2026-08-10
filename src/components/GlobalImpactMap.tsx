
import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { geoMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import { Users, Anchor, Building2, Radio } from 'lucide-react';

import { IMPACT_COUNTRIES, TRADE_ROUTES, VISIBLE_ISO } from '../data/mockData';
import { CountryImpact, ImpactCity } from '../types';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const WIDTH = 1000;
const HEIGHT = 620;

const NAVY = '#0F2557';
const ORANGE = '#FF6B00';
const BLUE = '#005DFF';

interface GeoFeature {
  id: string;
  d: string;
}

export const GlobalImpactMap: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(IMPACT_COUNTRIES[0].id);
  const [hoverCity, setHoverCity] = useState<string | null>(null);
  const [shapes, setShapes] = useState<GeoFeature[]>([]);
  const [loading, setLoading] = useState(true);

  /* ── Projection (stable across renders) ─────────────────── */
  const projection = useMemo(() => {
    return geoMercator()
      .center([69, 38])
      .scale(1000)
      .translate([WIDTH / 2, HEIGHT / 2])
      .clipExtent([
        [0, 0],
        [WIDTH, HEIGHT],
      ]);
  }, []);

  const project = useMemo(
    () =>
      (coords: [number, number]): [number, number] => {
        const p = projection(coords);
        return p ? [p[0], p[1]] : [-9999, -9999];
      },
    [projection]
  );

  /* ── Load + build country paths once ────────────────────── */
  useEffect(() => {
    let cancelled = false;
    const pathGen = geoPath(projection);

    fetch(GEO_URL)
      .then((r) => r.json())
      .then((topology: any) => {
        if (cancelled) return;
        const collection: any = feature(topology, topology.objects.countries);

        const built: GeoFeature[] = collection.features
          .map((f: any) => ({
            id: String(f.id).padStart(3, '0'),
            feature: f,
          }))
          .filter((f: any) => VISIBLE_ISO.includes(f.id))
          .map((f: any) => ({ id: f.id, d: pathGen(f.feature) || '' }))
          .filter((f: GeoFeature) => f.d.length > 0);

        setShapes(built);
        setLoading(false);
      })
      .catch(() => !cancelled && setLoading(false));

    return () => {
      cancelled = true;
    };
  }, [projection]);

  /* ── Derived data ───────────────────────────────────────── */
  const active = useMemo(
    () => IMPACT_COUNTRIES.find((c) => c.id === activeId) ?? IMPACT_COUNTRIES[0],
    [activeId]
  );

  const isoToCountry = useMemo(() => {
    const map: Record<string, CountryImpact> = {};
    IMPACT_COUNTRIES.forEach((c) => {
      map[c.isoNumeric.padStart(3, '0')] = c;
    });
    return map;
  }, []);

  const allCities = useMemo(
    () =>
      IMPACT_COUNTRIES.flatMap((c) =>
        c.cities.map((city) => ({ ...city, countryId: c.id, country: c.country }))
      ),
    []
  );

  /** Gentle curved path between two lat/lng points */
  const curve = (from: [number, number], to: [number, number]) => {
    const [x1, y1] = project(from);
    const [x2, y2] = project(to);
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    // perpendicular offset — 14% of the segment length
    const cx = mx - (dy / len) * len * 0.14;
    const cy = my + (dx / len) * len * 0.14;
    return `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`;
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Header ─────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-sm">
            Sovereign Reach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 font-heading">
            Pakistan &amp; <span className="text-[#FF6B00]">CIS Countries</span>
          </h2>
          <p className="mt-1 text-sm font-semibold tracking-[0.35em] text-slate-500 uppercase">
            Trade Routes
          </p>
          <p className="mt-4 text-base text-slate-600 font-normal">
            Connecting markets, building prosperity. Hover any country or hub to
            inspect regional trade routes, corporate offices and client density.
          </p>
        </div>

        {/* ── Map + Detail Panel ─────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map */}
          <div className="lg:col-span-8 relative w-full bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#0F2557_1.2px,transparent_1.2px)] [background-size:22px_22px] opacity-[0.06] pointer-events-none" />

            {loading && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <span className="w-3 h-3 rounded-full border-2 border-slate-300 border-t-[#FF6B00] animate-spin" />
                  Loading map…
                </div>
              </div>
            )}

            <svg
              viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
              className="w-full h-auto relative"
              style={{ fontFamily: 'inherit' }}
            >
              {/* Countries */}
              <g>
                {shapes.map((shape) => {
                  const data = isoToCountry[shape.id];
                  const isActive = data?.id === activeId;
                  return (
                    <path
                      key={shape.id}
                      d={shape.d}
                      fill={isActive ? '#FFF1E6' : '#FFFFFF'}
                      stroke={isActive ? ORANGE : '#C9D2E3'}
                      strokeWidth={isActive ? 1.1 : 0.6}
                      style={{ cursor: 'pointer', transition: 'all 200ms ease' }}
                      onMouseEnter={() => data && setActiveId(data.id)}
                      onClick={() => data && setActiveId(data.id)}
                    />
                  );
                })}
              </g>

              {/* Trade routes */}
              <g style={{ pointerEvents: 'none' }}>
                {TRADE_ROUTES.map((route) => (
                  <path
                    key={route.id}
                    d={curve(route.from, route.to)}
                    fill="none"
                    stroke={route.accent === 'blue' ? BLUE : ORANGE}
                    strokeWidth={1.4}
                    strokeDasharray="5 5"
                    strokeLinecap="round"
                    opacity={0.5}
                  />
                ))}
              </g>

              {/* Country labels */}
              <g style={{ pointerEvents: 'none' }}>
                {IMPACT_COUNTRIES.map((c) => {
                  const [x, y] = project(c.coordinates);
                  return (
                    <text
                      key={`lbl-${c.id}`}
                      x={x}
                      y={y}
                      textAnchor="middle"
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        letterSpacing: '0.06em',
                        fill: activeId === c.id ? ORANGE : NAVY,
                        transition: 'fill 200ms ease',
                      }}
                    >
                      {c.country.toUpperCase()}
                    </text>
                  );
                })}

                {/* Caspian Sea */}
                {(() => {
                  const [x, y] = project([51.0, 41.5]);
                  return (
                    <>
                      <text x={x} y={y} textAnchor="middle" style={{ fontSize: 10, fontWeight: 600, fill: '#5B7BB5' }}>
                        CASPIAN
                      </text>
                      <text x={x} y={y + 12} textAnchor="middle" style={{ fontSize: 10, fontWeight: 600, fill: '#5B7BB5' }}>
                        SEA
                      </text>
                    </>
                  );
                })()}
              </g>

              {/* City + port markers */}
              <g>
                {allCities.map((city) => {
                  const [x, y] = project(city.coordinates);
                  const isHot = hoverCity === city.name;
                  const inActive = city.countryId === activeId;
                  const accent = isHot || inActive ? ORANGE : NAVY;

                  return (
                    <g
                      key={city.name}
                      transform={`translate(${x},${y})`}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => {
                        setHoverCity(city.name);
                        setActiveId(city.countryId);
                      }}
                      onMouseLeave={() => setHoverCity(null)}
                    >
                      {/* generous invisible hit area */}
                      <circle r={13} fill="transparent" />

                      {isHot && <circle r={11} fill={ORANGE} opacity={0.18} className="animate-ping" />}

                      {city.type === 'port' ? (
                        <g transform="translate(-7,-7)" style={{ pointerEvents: 'none' }}>
                          <circle cx={7} cy={7} r={7.5} fill={accent} />
                          <path
                            d="M7 3.2v7.6M4.6 4.6h4.8M4.2 8.4a2.8 2.8 0 0 0 5.6 0"
                            stroke="#fff"
                            strokeWidth={1.1}
                            strokeLinecap="round"
                            fill="none"
                          />
                        </g>
                      ) : (
                        <g style={{ pointerEvents: 'none' }}>
                          <circle r={5.5} fill="#fff" stroke={accent} strokeWidth={1.6} />
                          <circle r={2.2} fill={accent} />
                        </g>
                      )}

                      <text
                        x={11}
                        y={4}
                        style={{ fontSize: 11, fontWeight: 600, fill: accent, pointerEvents: 'none' }}
                      >
                        {city.name}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-4 rounded-xl bg-white/90 backdrop-blur px-3.5 py-2 border border-slate-200 shadow-sm">
              <span className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-600">
                <span className="w-2.5 h-2.5 rounded-full border-2 border-[#0F2557]" />
                City hub
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-600">
                <Anchor className="w-3 h-3 text-[#0F2557]" />
                Sea port
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-600">
                <span className="w-5 border-t-2 border-dashed border-[#FF6B00]" />
                Trade route
              </span>
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="h-full p-6 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-col gap-6"
              >
                <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-wider">
                      {active.region}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 font-heading leading-tight">
                      {active.country}
                    </h3>
                  </div>
                  <span className="shrink-0 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[11px] font-bold text-[#FF6B00]">
                    {active.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-800 font-bold">
                    <Users className="w-5 h-5 text-[#FF6B00] shrink-0" />
                    <span>{active.clients}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {active.description}
                  </p>
                </div>

                {active.cities.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      <Radio className="w-3.5 h-3.5 text-[#005DFF]" />
                      Operational hubs
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {active.cities.map((city: ImpactCity) => (
                        <span
                          key={city.name}
                          onMouseEnter={() => setHoverCity(city.name)}
                          onMouseLeave={() => setHoverCity(null)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-colors cursor-default ${
                            hoverCity === city.name
                              ? 'bg-[#FF6B00] text-white border-[#FF6B00]'
                              : 'bg-slate-50 text-slate-700 border-slate-200'
                          }`}
                        >
                          {city.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    <Building2 className="w-3.5 h-3.5 text-[#005DFF]" />
                    Connected divisions
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {active.divisions.map((d) => (
                      <span
                        key={d}
                        className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-semibold text-slate-600"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpactMap;
