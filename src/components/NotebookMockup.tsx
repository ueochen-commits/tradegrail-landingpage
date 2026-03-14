import React from 'react';
import { motion } from 'motion/react';
import { 
  Plus, 
  Search, 
  FolderPlus, 
  ChevronRight, 
  ChevronDown, 
  MoreHorizontal, 
  Trash2, 
  Link as LinkIcon,
  Tag,
  Save,
  Undo2,
  Redo2,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  List,
  ListOrdered,
  Image as ImageIcon,
  CheckSquare,
  Eraser,
  Sparkles,
  MousePointer2,
  LayoutGrid,
  BarChart2,
  FileText,
  PlayCircle,
  ClipboardCheck,
  BookOpen,
  Target,
  Clock,
  Settings
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';
import { TradeGrailLogo } from './Logo';

export const NotebookMockup = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full h-full bg-[var(--bg-main)] text-[var(--text-main)] rounded-xl overflow-hidden flex border border-[var(--border-subtle)] shadow-2xl relative group/notebook">
      {/* 1. App Sidebar (Simulated Leftmost) */}
      <div className="w-16 border-r border-[var(--border-subtle)] bg-[var(--card-bg)] flex flex-col items-center py-4 shrink-0 gap-6">
        <div className="mb-2">
          <TradeGrailLogo className="w-8 h-8" />
        </div>
        <div className="flex flex-col gap-4">
          <SidebarAppIcon icon={LayoutGrid} />
          <SidebarAppIcon icon={BarChart2} />
          <SidebarAppIcon icon={FileText} />
          <SidebarAppIcon icon={PlayCircle} />
          <SidebarAppIcon icon={ClipboardCheck} />
          <SidebarAppIcon icon={BookOpen} active />
          <SidebarAppIcon icon={Target} />
          <SidebarAppIcon icon={Clock} />
        </div>
        <div className="mt-auto flex flex-col gap-4">
          <SidebarAppIcon icon={Settings} />
          <div className="w-8 h-8 rounded-full bg-[var(--text-main)]/10" />
        </div>
      </div>

      {/* 2. Notebook Folders Sidebar */}
      <div className="w-52 border-r border-[var(--border-subtle)] bg-[var(--card-bg)] flex flex-col shrink-0">
        <div className="p-4 space-y-3">
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--text-main)]/5 border border-[var(--border-subtle)] text-[10px] font-bold uppercase tracking-wider hover:bg-[var(--text-main)]/10 transition-colors">
            <FolderPlus className="w-3.5 h-3.5 text-brand-primary" />
            <span>{t('mockup.notebook.new_folder')}</span>
          </button>
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-brand-primary text-black text-[10px] font-black uppercase tracking-widest hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/10">
            <Plus className="w-4 h-4" />
            <span>{t('mockup.notebook.new_note')}</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-2 no-scrollbar">
          <div className="px-4 py-2">
            <div className="flex items-center justify-between text-[9px] text-[var(--text-muted)] uppercase font-black tracking-[0.2em] mb-3">
              <span>{t('mockup.notebook.folders')}</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="space-y-1">
              <SidebarItem icon={ChevronRight} label={t('mockup.notebook.all_notes')} active />
              <div className="pl-4 space-y-1 mt-1">
                <SidebarItem label={t('mockup.notebook.folder1')} />
                <SidebarItem label={t('mockup.notebook.folder2')} />
                <SidebarItem label={t('mockup.notebook.folder3')} />
              </div>
            </div>
          </div>

          <div className="px-4 py-4 space-y-1">
            <SidebarItem icon={CheckSquare} label={t('mockup.notebook.daily_journal')} />
            <SidebarItem icon={CheckSquare} label={t('mockup.notebook.weekly_review')} />
            <SidebarItem icon={CheckSquare} label={t('mockup.notebook.monthly_summary')} />
            <SidebarItem icon={ChevronRight} label={t('mockup.notebook.chart_analysis')} />
            <SidebarItem icon={ChevronRight} label={t('mockup.notebook.templates')} />
          </div>

          <div className="px-4 py-2">
            <div className="flex items-center justify-between text-[9px] text-[var(--text-muted)] uppercase font-black tracking-[0.2em] mb-3">
              <span>{t('mockup.notebook.tags')}</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex flex-wrap gap-1.5 px-1">
              <TagBadge text={t('mockup.analysis.opp1')} color="emerald" />
              <TagBadge text="FOMO" color="red" />
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-[var(--border-subtle)]">
          <SidebarItem icon={Trash2} label={t('mockup.notebook.trash')} />
        </div>
      </div>

      {/* 3. Note List Column */}
      <div className="w-60 border-r border-[var(--border-subtle)] bg-[var(--bg-main)] flex flex-col shrink-0">
        <div className="p-4 border-b border-[var(--border-subtle)]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--text-muted)]" />
            <input 
              type="text" 
              placeholder={`${t('mockup.notebook.search_placeholder')} (F6)`}
              className="w-full bg-[var(--text-main)]/5 border border-[var(--border-subtle)] rounded-lg pl-9 pr-3 py-2 text-[10px] focus:outline-none focus:border-brand-primary/50 transition-colors"
              readOnly
            />
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-2 bg-[var(--text-main)]/[0.02] border-b border-[var(--border-subtle)]">
          <span className="text-[9px] font-black text-brand-primary uppercase tracking-[0.2em]">{t('mockup.notebook.all_notes')}</span>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded border border-[var(--border-subtle)]" />
            <span className="text-[9px] text-[var(--text-muted)] uppercase font-bold">{t('mockup.notebook.select_all')}</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar">
          <NoteListItem title={t('mockup.notebook.note1_title')} date="2026-03-01" active />
          <NoteListItem title={t('mockup.notebook.note2_title')} date="2026-03-01" />
          <NoteListItem title={t('mockup.notebook.folder2')} date="2026-03-01" />
          <NoteListItem title={t('mockup.notebook.folder3')} date="2026-03-01" />
        </div>
      </div>

      {/* 4. Editor Area */}
      <div className="flex-1 flex flex-col bg-[var(--bg-main)] relative">
        {/* Editor Header */}
        <div className="p-6 border-b border-[var(--border-subtle)] flex items-start justify-between bg-[var(--bg-main)]/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="space-y-1">
            <h2 className="text-4xl font-black tracking-tighter text-[var(--text-main)]">{t('mockup.notebook.note1_title')}</h2>
            <div className="flex items-center gap-4 text-[9px] text-[var(--text-muted)] font-bold uppercase tracking-wider">
              <span>{t('mockup.notebook.created_at')}: 2026/3/2 00:52:56</span>
              <span>{t('mockup.notebook.updated_at')}: 00:53:02</span>
              <div className="flex items-center gap-1.5 text-emerald-500">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t('mockup.analysis.autosaved')}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-[var(--text-main)]/5 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg hover:bg-[var(--text-main)]/5 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar">
          {/* Link Trades Area (Dashed Box from Image) */}
          <div className="px-8 pt-6">
            <div className="w-full h-16 border-2 border-dashed border-[var(--border-subtle)] rounded-xl flex items-center justify-center gap-3 text-[var(--text-muted)] hover:border-brand-primary/30 hover:text-brand-primary transition-all cursor-pointer group/link">
              <LinkIcon className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest">{t('mockup.notebook.link_trades')} (Link Trades)</span>
            </div>
          </div>

          {/* Editor Actions Toolbar */}
          <div className="px-8 py-6 flex items-center gap-3">
            <DropdownButton label={t('mockup.notebook.folder2')} icon={FolderPlus} />
            <DropdownButton label={t('mockup.notebook.add_tag')} icon={Tag} />
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--text-main)]/5 border border-[var(--border-subtle)] text-[11px] font-bold uppercase tracking-wider hover:bg-[var(--text-main)]/10 transition-colors">
              <Save className="w-3.5 h-3.5" />
              <span>{t('mockup.notebook.save_template')}</span>
            </button>
          </div>

          {/* Rich Text Toolbar */}
          <div className="px-8 py-2 border-y border-[var(--border-subtle)] flex items-center gap-1 bg-[var(--text-main)]/[0.01] sticky top-0 z-10">
            <ToolbarGroup>
              <ToolbarButton icon={Undo2} />
              <ToolbarButton icon={Redo2} />
            </ToolbarGroup>
            <ToolbarDivider />
            <ToolbarGroup>
              <select className="bg-transparent text-[10px] font-black uppercase tracking-widest focus:outline-none cursor-pointer hover:text-brand-primary transition-colors px-2">
                <option>{t('mockup.notebook.body')}</option>
                <option>{t('mockup.notebook.h1')}</option>
                <option>{t('mockup.notebook.h2')}</option>
              </select>
              <ToolbarDivider />
              <select className="bg-transparent text-[10px] font-black uppercase tracking-widest focus:outline-none cursor-pointer hover:text-brand-primary transition-colors px-2">
                <option>Arial</option>
                <option>Inter</option>
                <option>JetBrains Mono</option>
              </select>
              <ToolbarDivider />
              <select className="bg-transparent text-[10px] font-black uppercase tracking-widest focus:outline-none cursor-pointer hover:text-brand-primary transition-colors px-2">
                <option>16px</option>
                <option>14px</option>
                <option>12px</option>
              </select>
            </ToolbarGroup>
            <ToolbarDivider />
            <ToolbarGroup>
              <ToolbarButton icon={Bold} />
              <ToolbarButton icon={Italic} />
              <ToolbarButton icon={Underline} />
              <ToolbarButton icon={Strikethrough} />
              <ToolbarButton icon={Code} />
            </ToolbarGroup>
            <ToolbarDivider />
            <ToolbarGroup>
              <ToolbarButton icon={List} />
              <ToolbarButton icon={ListOrdered} />
              <ToolbarButton icon={CheckSquare} />
            </ToolbarGroup>
            <ToolbarDivider />
            <ToolbarGroup>
              <ToolbarButton icon={LinkIcon} />
              <ToolbarButton icon={ImageIcon} />
              <ToolbarButton icon={Eraser} />
            </ToolbarGroup>
          </div>

          {/* Editor Content Area */}
          <div className="p-8 relative">
            <div className="max-w-3xl mx-auto space-y-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-[var(--text-main)]/80 leading-relaxed min-h-[400px] outline-none font-sans"
                contentEditable
                suppressContentEditableWarning
              >
                <p className="mb-6">{t('mockup.notebook.note_content1')}</p>
                <p className="mb-6">{t('mockup.notebook.note_content2')}</p>
                <div className="p-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/20 mb-6">
                  <p className="text-brand-primary font-black italic uppercase tracking-wider text-sm mb-2">{t('mockup.notebook.key_insight')} (Key Insight)</p>
                  <p className="text-[var(--text-main)]/90">{t('mockup.notebook.insight_desc')}</p>
                </div>
                <p className="mb-6">{t('mockup.notebook.emotional_state')}</p>
                <div className="h-6 w-1 bg-brand-primary animate-pulse inline-block ml-1 align-middle" />
              </motion.div>
            </div>

            {/* Floating Aesthetic Elements */}
            <div className="absolute top-24 right-12 space-y-4 opacity-0 group-hover/notebook:opacity-100 transition-opacity duration-700">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="p-4 rounded-2xl bg-[var(--text-main)]/[0.02] border border-[var(--border-subtle)] backdrop-blur-xl shadow-2xl w-52 scale-90 origin-right"
              >
                <div className="text-[9px] text-[var(--text-muted)] uppercase font-black tracking-widest mb-3">{t('mockup.notebook.link_trades')}</div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-xs font-black text-emerald-500">+$600</div>
                  <div className="flex-1">
                    <div className="text-[10px] font-black text-[var(--text-main)]">1000SATS</div>
                    <div className="text-[8px] text-[var(--text-muted)] font-bold uppercase">2026-03-01</div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="p-4 rounded-2xl bg-[var(--text-main)]/[0.02] border border-[var(--border-subtle)] backdrop-blur-xl shadow-2xl w-52 scale-90 origin-right"
              >
                <div className="text-[9px] text-[var(--text-muted)] uppercase font-black tracking-widest mb-3">{t('mockup.notebook.ai_insight')}</div>
                <div className="flex items-center gap-2 text-[10px] text-brand-primary font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t('mockup.notebook.ai_suggestion')}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Annotations */}
        <Annotation 
          className="top-1/3 left-[65%]"
          text={t('mockup.notebook.annotation1')}
          delay={1.5}
        />
        <Annotation 
          className="top-[15%] left-[25%]"
          text={t('mockup.notebook.annotation2')}
          delay={2}
          direction="top"
          color="pink"
        />
      </div>
    </div>
  );
};

const SidebarAppIcon = ({ icon: Icon, active }: { icon: any, active?: boolean }) => (
  <div className={cn(
    "w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer group/icon",
    active ? "bg-brand-primary text-black shadow-lg shadow-brand-primary/20" : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--text-main)]/5"
  )}>
    <Icon className="w-5 h-5" />
  </div>
);

const SidebarItem = ({ icon: Icon, label, active }: { icon?: any, label: string, active?: boolean }) => (
  <div className={cn(
    "flex items-center gap-3 px-3 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer group",
    active 
      ? "bg-brand-primary/10 text-brand-primary" 
      : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--text-main)]/5"
  )}>
    {Icon && <Icon className={cn("w-3.5 h-3.5", active ? "text-brand-primary" : "text-[var(--text-muted)]/50 group-hover:text-[var(--text-muted)]")} />}
    <span>{label}</span>
  </div>
);

const NoteListItem = ({ title, date, active }: { title: string, date: string, active?: boolean }) => (
  <div className={cn(
    "p-5 border-b border-[var(--border-subtle)] cursor-pointer transition-all relative group/item",
    active ? "bg-brand-primary/5" : "hover:bg-[var(--text-main)]/[0.02]"
  )}>
    {active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-primary" />}
    <div className={cn("text-xs font-black mb-1.5 uppercase tracking-tight", active ? "text-[var(--text-main)]" : "text-[var(--text-muted)] group-hover/item:text-[var(--text-main)]/80")}>{title}</div>
    <div className="text-[9px] text-[var(--text-muted)]/50 font-bold uppercase tracking-widest">{date}</div>
  </div>
);

const DropdownButton = ({ label, icon: Icon }: { label: string, icon?: any }) => (
  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--text-main)]/5 border border-[var(--border-subtle)] text-[11px] font-bold uppercase tracking-wider hover:bg-[var(--text-main)]/10 transition-colors">
    {Icon && <Icon className={cn("w-3.5 h-3.5 text-[var(--text-muted)]")} />}
    <span>{label}</span>
    <ChevronDown className="w-3 h-3 text-[var(--text-muted)]/50" />
  </button>
);

const ToolbarButton = ({ icon: Icon }: { icon: any }) => (
  <button className="p-2 rounded-lg hover:bg-[var(--text-main)]/10 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-all hover:scale-110">
    <Icon className="w-4 h-4" />
  </button>
);

const ToolbarGroup = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-1">
    {children}
  </div>
);

const ToolbarDivider = () => (
  <div className="w-px h-5 bg-[var(--border-subtle)] mx-3" />
);

const TagBadge = ({ text, color }: { text: string, color: 'red' | 'emerald' }) => {
  const colors = {
    red: "bg-red-500/10 text-red-500 border-red-500/20",
    emerald: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
  };
  return (
    <div className={cn("px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest border flex items-center gap-1", colors[color])}>
      {text}
    </div>
  );
};

const Annotation = ({ className, text, delay, direction = 'top', color = 'indigo' }: { className: string, text: string, delay: number, direction?: 'top' | 'bottom' | 'left' | 'right', color?: 'indigo' | 'pink' }) => {
  const bgColor = color === 'pink' ? 'bg-[#E91E63]' : 'bg-brand-primary';
  const textColor = color === 'pink' ? 'text-white' : 'text-black';
  const arrowColor = color === 'pink' ? 'bg-[#E91E63]' : 'bg-brand-primary';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={cn("absolute z-40 flex flex-col items-center gap-2 pointer-events-none", className)}
    >
      <div className={cn("px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-2xl whitespace-nowrap relative", bgColor, textColor)}>
        {text}
        <div className={cn(
          "absolute w-2.5 h-2.5 rotate-45",
          arrowColor,
          direction === 'top' && "-bottom-1 left-1/2 -translate-x-1/2",
          direction === 'bottom' && "-top-1 left-1/2 -translate-y-1/2",
          direction === 'left' && "-right-1 top-1/2 -translate-y-1/2",
          direction === 'right' && "-left-1 top-1/2 -translate-y-1/2",
        )} />
      </div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <MousePointer2 className={cn("w-5 h-5", color === 'pink' ? "text-[#E91E63] fill-[#E91E63]" : "text-brand-primary fill-brand-primary")} />
      </motion.div>
    </motion.div>
  );
};
