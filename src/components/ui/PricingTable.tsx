import type { PricingRow } from '../../types/pricing'
import { useLanguage } from '../../context/LanguageContext'

interface PricingTableProps {
  rows: PricingRow[]
  showSizes?: boolean
}

export function PricingTable({ rows, showSizes = false }: PricingTableProps) {
  const { t } = useLanguage()
  const hasSizes = showSizes && rows.some((row) => row.sizes)

  if (hasSizes) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-800 font-body text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              <th className="py-3 pr-4 font-normal">{t({ en: 'Service', vi: 'Dịch vụ' })}</th>
              <th className="px-2 py-3 font-normal">S</th>
              <th className="px-2 py-3 font-normal">M</th>
              <th className="px-2 py-3 font-normal">L</th>
              <th className="px-2 py-3 font-normal">XL</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-zinc-800/80 align-top">
                <td className="py-4 pr-4">
                  <p className="font-body text-zinc-200">{t(row.name)}</p>
                  {row.description && (
                    <p className="mt-1 font-body text-xs leading-relaxed text-zinc-500">{t(row.description)}</p>
                  )}
                </td>
                <td className="px-2 py-4 text-zinc-400">{row.sizes?.s ?? '—'}</td>
                <td className="px-2 py-4 text-zinc-400">{row.sizes?.m ?? '—'}</td>
                <td className="px-2 py-4 text-zinc-400">{row.sizes?.l ?? '—'}</td>
                <td className="px-2 py-4 text-zinc-400">{row.sizes?.xl ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="divide-y divide-zinc-800">
      {rows.map((row) => (
        <div key={row.id} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="min-w-0 flex-1">
            <p className="font-body text-zinc-200">{t(row.name)}</p>
            {row.description && (
              <p className="mt-1 font-body text-xs leading-relaxed text-zinc-500">{t(row.description)}</p>
            )}
          </div>
          <p className="shrink-0 font-body text-sm uppercase tracking-[0.15em] text-zinc-400">
            {row.price ?? (row.description ? '' : '—')}
          </p>
        </div>
      ))}
    </div>
  )
}
