import { PropagateLoader } from "react-spinners";

interface SpinnerProps {
  color: string;
  loading: boolean;
  css: React.CSSProperties;
}
export const Spinner = ({ color, loading, css }: SpinnerProps) => (
  <PropagateLoader color={color} loading={loading} cssOverride={css} />
);
