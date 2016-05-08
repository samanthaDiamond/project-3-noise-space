require 'csv'

Measurement.destroy_all
rowNum = 0
csv_text = File.read(Rails.root.join('lib', 'seeds', 'measurements.csv'))
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
  if rowNum % 100 === 0
    t = Measurement.new
    t.datetime = row['datetime']
    t.dB = row['dB'].to_f
    t.save
  end
  rowNum += 1
end
